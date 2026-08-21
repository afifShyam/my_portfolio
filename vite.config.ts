import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    visualizer({
      open: false,
      filename: 'bundle-analysis.html',
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
  },
});
