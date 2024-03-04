/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@assets': path.resolve('./assets'),
      '@components': path.resolve('./src/components'),
      '@models': path.resolve('./src/models'),
      '@utils': path.resolve('./src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setupTest.ts'],
  },
});
