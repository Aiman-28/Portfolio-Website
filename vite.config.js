import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' => build works on any static host (GitHub Pages sub-path, Netlify, Vercel)
export default defineConfig({
  base: './',
  plugins: [react()],
});
