import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = new URL(import.meta.env.BASE_URL, site ?? 'https://eritonscherer.github.io').toString().replace(/\/$/, '');

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap-index.xml\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
