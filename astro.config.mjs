import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://albertoapps.info', 
  integrations: [sitemap()],
});