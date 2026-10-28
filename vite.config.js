import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE: '/' for Vercel, Netlify or a custom domain (default),
// '/SIS-WEBSITE/' for a GitHub Pages project site.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    // Keeps the output working on older phones: Safari/iOS 14+, Chrome 87+, Firefox 78+, Edge 88+.
    target: ['es2020', 'chrome87', 'safari14', 'firefox78', 'edge88'],
    cssTarget: ['chrome87', 'safari14', 'firefox78'],
  },
});
