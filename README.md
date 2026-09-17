# Tekniksvar

Tekniksvar.com är en svensk teknikpublikation med praktiska guider, felsökning, AI, appar, jämförelser och digitala verktyg.

## Lokal utveckling

```bash
npm install
npm run dev
```

## Produktion

```bash
npm run build
```

Den statiska sajten byggs till `dist/`. Pagefind-indexering körs som en del av build-scriptet.

## Cloudflare Workers

Projektet deployas från GitHub-repot `aram1990/tekniksvar` via Cloudflare Workers Builds.

- Produktionsbranch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Output directory: `dist`
- Produktion: `https://tekniksvar.com`

`wrangler.jsonc` i repo-roten konfigurerar statiska assets från `./dist` och sajten ska förbli en statisk Astro-build.
