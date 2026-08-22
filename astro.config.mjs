// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  env: {
    schema: {
      WEB3FORMS_ACCESS_KEY: envField.string({
        context: 'server', // 🔒 Garantiza que NUNCA se enviará al navegador
        access: 'secret',  // 🔒 Se trata como clave secreta
      }),
    },
  },
});