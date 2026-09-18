import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tekniksvar.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://tekniksvar.com/sok/' &&
        page !== 'https://tekniksvar.com/404/',
    }),
  ],
});
