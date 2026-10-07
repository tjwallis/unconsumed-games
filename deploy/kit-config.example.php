<?php
/**
 * Kit settings for public/api/subscribe.php.
 *
 * Copy this file to the folder ABOVE the web root, named kit-config.php, e.g.
 *   /var/www/vhosts/unconsumedgames.com/kit-config.php   (next to httpdocs, not inside it)
 * Never commit the real file; it holds a secret.
 */
return [
    // Kit → Settings → Developer → API keys (v4).
    'KIT_API_KEY' => 'kit_xxxxxxxxxxxxxxxxxxxxxxxx',

    // The form people join. Its id is in the form's URL in Kit: app.kit.com/forms/designers/1234567/edit
    'KIT_FORM_ID' => '1234567',

    // Optional: tag ids for the platform choice in the notify dialog. Leave '' to skip.
    'KIT_TAG_IOS' => '',
    'KIT_TAG_ANDROID' => '',

    // '1': new subscribers must confirm by email (the form's double opt-in). '0': active at once.
    'KIT_DOUBLE_OPT_IN' => '1',
];
