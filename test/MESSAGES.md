# Message library checks

The new libraries contain 60 original examples, with an Arabic and English version of each, plus relationship-stage and consent guidance. They do not send messages or contact anyone.

## Repeat checks

- `npm ci && npm run build && npm test`
- Browser regression (optional development-only install): `npm install --no-save --package-lock=false playwright && npx playwright install chromium && node test/messages.browser.mjs`
- The browser script serves the static `out/` folder on localhost, checks mobile/desktop, both languages, all category filters, empty search/reset, actual clipboard content, clipboard-denial manual fallback, menu routes, decoded photographs and horizontal overflow. It closes the local server and browser afterward. Requires Node 22.18+ for native TypeScript stripping in the content tests and Python 3 for the temporary static server.

## Photographs

Photographs are stored locally, so page visitors do not make requests to an external image service:

- `public/images/conversation-photo.jpg`: https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&fit=crop
- `public/images/morning-photo.jpg`: https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85&fit=crop

The photos illustrate conversation and a morning coffee, not named people, testimonials or relationship claims.

## Existing dependency audit

The feature does not change package.json or package-lock.json. An audit on 2026-11-18 reported existing build-tool dependency advisories, notably picomatch/glob dependencies through shadcn and PostCSS through Next. The production target remains static export, not an exposed development server. Dependency remediation is a separate maintenance task and was not silently mixed into this content PR.
