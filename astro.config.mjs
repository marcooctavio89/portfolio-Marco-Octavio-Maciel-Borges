// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcooctavio89.github.io',
  base: '/portfolio-Marco-Octavio-Maciel-Borges',
  vite: {
    plugins: [tailwindcss()]
  }
});