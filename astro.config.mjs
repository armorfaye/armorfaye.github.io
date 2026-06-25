// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages user site (armorfaye.github.io) deploys at the domain root,
// so `base` stays "/". For a project repo you would set base: '/repo-name'.
export default defineConfig({
  site: 'https://armorfaye.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
