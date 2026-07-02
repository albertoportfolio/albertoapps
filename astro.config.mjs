// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Dominio canónico del sitio (usado también en Layout.astro y robots.txt).
export default defineConfig({
  site: "https://albertoapps.info",
  integrations: [sitemap()],
});
