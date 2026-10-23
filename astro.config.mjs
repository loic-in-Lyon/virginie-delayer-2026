// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://virginie-delayer.com',
  integrations: [keystatic(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});