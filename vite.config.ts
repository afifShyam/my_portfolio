import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import cssnano from 'cssnano';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isAnalyze = mode === 'analyze';
  
  return {
  plugins: [
    react({ 
      // Use Fast Refresh for better development experience
      fastRefresh: true,
    }),
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
      // Enhanced code splitting strategy
      output: {
        manualChunks: (id) => {
          // Group Chakra UI packages together
          if (id.includes('@chakra-ui')) {
            return 'chakra';
          }
          // Group React and related packages
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // Group other major dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    cssCodeSplit: true, // Splits CSS into separate files
    sourcemap: process.env.NODE_ENV !== 'production',
    chunkSizeWarningLimit: 1000,
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
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
