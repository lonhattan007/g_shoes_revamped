/// <reference types="vitest" />
import { fileURLToPath } from 'node:url';

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@assets': path.resolve('./assets'),
      // '@data': path.resolve('./data'),
      // '@components': path.resolve('./src/components'),
      // '@constants': path.resolve('./src/constants'),
      // '@models': path.resolve('./src/models'),
      // '@stores': path.resolve('./src/stores'),
      // '@utils': path.resolve('./src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setupTest.ts'],
  },
});
