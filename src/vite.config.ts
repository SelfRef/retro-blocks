import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'RetroBlocks',
      formats: ['es', 'umd'],
      fileName: (format) => `retro-blocks.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      external: [],
      output: {
        exports: 'named'
      }
    }
  }
});
