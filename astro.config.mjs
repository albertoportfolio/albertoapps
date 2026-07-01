// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Dominio canónico del sitio (usado también en Layout.astro y robots.txt).
export default defineConfig({
  site: "https://albertoapps.info",
  integrations: [react(), sitemap()],
});
