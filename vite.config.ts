import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import cssnano from 'cssnano';

export default defineConfig({
  plugins: [
    react(),
    // Compression plugin (Brotli/Gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Bundle analyzer for debugging
    visualizer({
      open: true,
      filename: 'bundle-analysis.html',
    }),
  ],
  build: {
    rollupOptions: {
      // Code splitting for vendor libraries
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    cssCodeSplit: true, // Splits CSS into separate files
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
});
