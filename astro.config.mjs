// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://virginie-delayer.com',
  integrations: [keystatic(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});