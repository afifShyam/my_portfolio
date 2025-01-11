import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No tailwind import here, PostCSS handles it
export default defineConfig({
  plugins: [react()],
});
