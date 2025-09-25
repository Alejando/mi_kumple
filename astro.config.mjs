// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikumple.com.mx',
  integrations: [tailwind()],
  server: {
    host: true, // listen on all interfaces so you can tunnel with ngrok
    port: 4321,
  },
});