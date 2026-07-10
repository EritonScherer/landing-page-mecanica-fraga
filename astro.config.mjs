import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const siteUrl = env.SITE_URL ?? 'https://eritonscherer.github.io';
const basePath = env.BASE_PATH ?? '/landing-page-mecanica-fraga/';
const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;

export default defineConfig({
  site: siteUrl,
  base: normalizedBase,
  integrations: [sitemap()],
});
