<?php
/**
 * Notify-list sign-up → Kit (API v4).
 *
 * The site is static, so the browser posts here and this script calls Kit with the
 * secret API key, which never reaches the browser.
 *
 * Settings come from environment variables, or from kit-config.php one folder ABOVE
 * the web root (outside httpdocs, so it is never served). See deploy/kit-config.example.php.
 *
 *   KIT_API_KEY      required  Kit → Settings → Developer → API (v4 key)
 *   KIT_FORM_ID      required  the form subscribers join (its confirmation email is sent from Kit)
 *   KIT_TAG_IOS      optional  tag id added when the visitor picks iOS
 *   KIT_TAG_ANDROID  optional  tag id added when the visitor picks Android
 *   KIT_DOUBLE_OPT_IN optional "1" (default): new subscribers stay inactive until they confirm
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function reply(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function setting(array $file, string $key, string $default = ''): string
{
    $env = getenv($key);
    if ($env !== false && $env !== '') return $env;
    return isset($file[$key]) ? (string) $file[$key] : $default;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Only this site's own pages may post here.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('//' . $host, PHP_URL_HOST)) {
    reply(403, ['ok' => false, 'error' => 'Forbidden.']);
}

$configPath = getenv('KIT_CONFIG') ?: dirname($_SERVER['DOCUMENT_ROOT'] ?? __DIR__ . '/../..') . '/kit-config.php';
$file = is_readable($configPath) ? (array) (require $configPath) : [];
$apiKey = setting($file, 'KIT_API_KEY');
$formId = setting($file, 'KIT_FORM_ID');
$apiBase = rtrim(setting($file, 'KIT_API_BASE', 'https://api.kit.com/v4'), '/');
if ($apiKey === '' || $formId === '') {
    error_log('subscribe.php: KIT_API_KEY or KIT_FORM_ID is not set');
    reply(503, ['ok' => false, 'error' => 'Sign-up is not available right now. Please try again later.']);
}

$raw = file_get_contents('php://input') ?: '';
$input = str_contains($_SERVER['CONTENT_TYPE'] ?? '', 'application/json')
    ? (json_decode($raw, true) ?: [])
    : $_POST;

// Honeypot: people never see this field; bots fill it in. Pretend it worked.
if (!empty($input['website'])) reply(200, ['ok' => true, 'confirm' => false]);

$email = trim((string) ($input['email'] ?? ''));
if ($email === '' || strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    reply(422, ['ok' => false, 'error' => 'Enter a valid email address']);
}
$platform = (string) ($input['platform'] ?? '');

// Light rate limit: 5 sign-ups per address of origin per 10 minutes.
$bucket = sys_get_temp_dir() . '/ug-subscribe-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$now = time();
$hits = array_filter(
    is_readable($bucket) ? (array) json_decode((string) file_get_contents($bucket), true) : [],
    fn($t) => is_int($t) && $t > $now - 600,
);
if (count($hits) >= 5) reply(429, ['ok' => false, 'error' => 'Too many tries. Please wait a few minutes.']);
$hits[] = $now;
@file_put_contents($bucket, json_encode(array_values($hits)), LOCK_EX);

function kit(string $base, string $key, string $path, array $body): array
{
    $ch = curl_init($base . $path);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Accept: application/json',
            'X-Kit-Api-Key: ' . $key,
        ],
        CURLOPT_POSTFIELDS => json_encode($body),
    ]);
    $res = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $err = curl_error($ch);
    curl_close($ch);
    if ($res === false) error_log("subscribe.php: Kit $path failed: $err");
    return [$status, is_string($res) ? (json_decode($res, true) ?: []) : []];
}

$doubleOptIn = setting($file, 'KIT_DOUBLE_OPT_IN', '1') !== '0';

// 1. Create the subscriber (Kit updates them if the address already exists).
[$status, $body] = kit($apiBase, $apiKey, '/subscribers', [
    'email_address' => $email,
    'state' => $doubleOptIn ? 'inactive' : 'active',
]);
if ($status === 422) reply(422, ['ok' => false, 'error' => 'Enter a valid email address']);
if ($status < 200 || $status >= 300) {
    error_log("subscribe.php: create subscriber returned $status " . json_encode($body));
    reply(502, ['ok' => false, 'error' => 'We could not sign you up just now. Please try again later.']);
}

// 2. Add them to the form. This is what sends the form's confirmation email.
$referrer = (string) ($_SERVER['HTTP_REFERER'] ?? '');
[$status, $body] = kit($apiBase, $apiKey, '/forms/' . rawurlencode($formId) . '/subscribers', array_filter([
    'email_address' => $email,
    'referrer' => $referrer !== '' ? $referrer : null,
]));
if ($status < 200 || $status >= 300) {
    error_log("subscribe.php: add to form returned $status " . json_encode($body));
    reply(502, ['ok' => false, 'error' => 'We could not sign you up just now. Please try again later.']);
}

// 3. Optional platform tag. A failure here is logged, not shown: they are signed up.
$tag = match ($platform) {
    'ios' => setting($file, 'KIT_TAG_IOS'),
    'android' => setting($file, 'KIT_TAG_ANDROID'),
    default => '',
};
if ($tag !== '') {
    [$status, $body] = kit($apiBase, $apiKey, '/tags/' . rawurlencode($tag) . '/subscribers', ['email_address' => $email]);
    if ($status < 200 || $status >= 300) error_log("subscribe.php: tag returned $status " . json_encode($body));
}

reply(200, ['ok' => true, 'confirm' => $doubleOptIn]);
