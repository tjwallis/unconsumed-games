# Unconsumed Games

Marketing site for [Unconsumed Games](https://unconsumedgames.com) and **Covenanter**, a story game set in the Scottish Reformation, 1559–1560.

## Pages

- `/` — studio home: hero, “Made to last”, the cast, why it is called Covenanter, the game, a playable disputation, and the notify form
- `/press` — press kit, screenshots and brand downloads
- `/brand` — brand guidelines: marks, colour, type, voice, and the cast sprites
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

## Develop

```bash
npm install
npm run dev
```
