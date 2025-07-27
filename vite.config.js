// astro.config.mjs o astro.config.js (no debería llamarse astrology.config)
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    preview: {
      host: '0.0.0.0',
      port: 4321, // o el que uses
      allowedHosts: ['redkit.co'] // o ['*'] para pruebas
    }
  }
});
