import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import cssnano from 'cssnano';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === 'analyze';
  
  return {
    base: './',
    plugins: [
    react(),
    // Resolve imports using tsconfig paths
    tsconfigPaths(),
    // Compression plugin (Brotli/Gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Add gzip compression as well
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Bundle analyzer for debugging - only in analyze mode
    isAnalyze && visualizer({
      open: true,
      filename: 'bundle-analysis.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      // Disable code splitting to avoid dependency issues
      output: {
        manualChunks: () => 'index',
      },
    },
    cssCodeSplit: true, // Splits CSS into separate files
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
};
});
