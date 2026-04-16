import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  server: {
    hmr: false
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2022'
  }
});
