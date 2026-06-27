import type { Config } from "tailwindcss";

// Tailwind se usa de forma acotada: únicamente para las utilidades del
// componente Magic UI (iPhone mockup). Se desactiva preflight para no resetear
// los estilos del proyecto, que siguen en `app/globals.css` (CSS plano).
const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
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
