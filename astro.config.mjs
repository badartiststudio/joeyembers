import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://joeyembers.org',
  integrations: [mdx(), sitemap(), tailwind()],
  build: { format: 'directory' },
  vite: { server: { fs: { allow: ['.'] } } }
});