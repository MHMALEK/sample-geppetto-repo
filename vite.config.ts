import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components'),
      hooks:      resolve(__dirname, 'src/hooks'),
      types:      resolve(__dirname, 'src/types'),
      api:        resolve(__dirname, 'src/api'),
      utils:      resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
