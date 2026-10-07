# Unconsumed Games

Marketing site for [Unconsumed Games](https://unconsumedgames.com) and **Covenanter**, a story game set in the Scottish Reformation, 1559–1560.

## Pages

- `/` — studio home: hero, “Made to last”, the cast, why it is called Covenanter, the game, a playable disputation, and the notify form
- `/press` — press kit, screenshots and brand downloads
- `/delete-account` — how to delete a Covenanter account
- `/privacy` — privacy notice

The notify form stores an email in the browser only. It does not send mail until a list service is connected (`src/components/site/notify.tsx`).

## Design system

The site follows the Unconsumed Games design system exported from Claude Design.

- `src/styles/ds/` — the design system's tokens and component CSS, vendored verbatim (only font URLs changed). Edit upstream, not here.
- `src/components/ds/` — typed React versions of its components (Button, IconButton, Badge, Dialog, Toast, Input, Select, Tabs, Icon).
- `src/styles/site.css`, `covenant.css` — the home page, ported from the design prototype.
- `src/styles/chrome.css`, `pages.css` — the mobile menu, footer additions and the inner pages, built from the same tokens.
- `src/lib/covenanter.ts` — cast, screenshots, verses and disputation claims. The biographies were written from general history; check them against the game.
- Art: `public/art/covenanter/` (title parallax and portrait sheet), `public/art/poses/` (generated poses), `public/fonts/`.
- Screenshots: `public/art/game/<id>.jpg` (1600 × 736 JPEG, shown on the home page, press kit and brand page) and `public/art/game/full/<id>.png` (the 2868 × 1320 App Store PNG, the press-kit download). The list, captions and alt text are `SHOTS` in `src/lib/covenanter.ts`.

## Develop

```bash
npm install
npm run dev
```

## Deploy to Plesk (static)

The site has no server code, so `npm run build:static` prerenders every page to plain HTML in `dist/client` (with `sitemap.xml`, `robots.txt` and the Apache rules in `public/.htaccess`). Set `VITE_SITE_URL` if the domain is not `https://unconsumedgames.com`; it is used for share cards and the sitemap. New routes must be added to the `pages` list in `vite.config.ts`.

Plesk's Git extension builds and publishes it on every push:

1. **Node.js:** install Node 22 with Plesk's Node.js extension. In **Web Hosting Access**, set SSH access to `/bin/bash` (not chrooted) so deploy actions can run it.
2. **Websites & Domains → Git → Add repository:** `https://github.com/tjwallis/unconsumed-games`, branch `main`, deployment mode **Automatic**, server path outside the web root (for example `/unconsumed-games`).
3. **Additional deployment actions:**
   ```sh
   sh scripts/plesk-deploy.sh /var/www/vhosts/unconsumedgames.com/httpdocs
   ```
   The script installs, builds and mirrors `dist/client` into `httpdocs`, keeping `.well-known` (Let's Encrypt).
4. **Webhook:** copy the webhook URL Plesk shows into GitHub → Settings → Webhooks, so a push triggers a deploy.
5. **HTTPS:** turn on **Permanent SEO-safe 301 redirect from HTTP to HTTPS** in Hosting Settings, or uncomment the HTTPS rule in `.htaccess` (not both).

`.htaccess` needs Apache (the Plesk default, behind nginx). On an nginx-only site, translate its rewrite and header rules into **Apache & nginx Settings → Additional nginx directives**.

`npm run build` is unchanged and still builds for the Grok preview and Vercel.
