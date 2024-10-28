import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Minify JavaScript
    minify: 'terser', // can also use 'esbuild' for faster builds
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
      },
    },
  },
});
