// vite.config.js
import { defineConfig } from 'astro/config';

export default defineConfig({
  // otras opciones de Astro...
  vite: {
    preview: {
      allowedHosts: ['*']
    }
  }
});
