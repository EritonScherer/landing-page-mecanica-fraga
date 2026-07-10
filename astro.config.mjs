import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE ?? 'https://eritonscherer.github.io',
  base: process.env.BASE_PATH ?? '/landing-page-mecanica-fraga/',
  integrations: [sitemap()],
});
