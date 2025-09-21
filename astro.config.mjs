// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true, // listen on all interfaces so you can tunnel with ngrok
    port: 4321,
  },
  vite: {
    server: {
      host: true,
      cors: true,
      allowedHosts: ['f3cd6f536f21.ngrok-free.app'],
    },
    preview: {
      host: true,
      cors: true,
      allowedHosts: ['f3cd6f536f21.ngrok-free.app'],
    },
  },
});
