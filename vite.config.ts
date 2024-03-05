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
      '@data': path.resolve('./data'),
      '@components': path.resolve('./src/components'),
      '@models': path.resolve('./src/models'),
      '@stores': path.resolve('./src/stores'),
      '@utils': path.resolve('./src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setupTest.ts'],
  },
});
