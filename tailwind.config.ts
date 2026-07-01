import type { Config } from "tailwindcss";

// Tailwind se usa de forma acotada: únicamente para las utilidades del
// componente Magic UI (iPhone mockup). Se desactiva preflight para no resetear
// los estilos del proyecto, que siguen en `src/styles/globals.css` (CSS plano).
const config: Config = {
  content: ["./src/**/*.{ts,tsx,astro}"],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
