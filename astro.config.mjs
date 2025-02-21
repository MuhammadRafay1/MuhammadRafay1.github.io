import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/', // Required for GitHub Pages user repositories
});