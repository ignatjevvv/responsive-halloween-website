// vite.config.ts
import { defineConfig } from 'vite';
import path, { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    port: 5500,
  },
  root: path.resolve('./src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: assetInfo => {
          const originalName = assetInfo.name || 'asset';
          const ext = originalName.includes('.')
            ? originalName.split('.').pop().toLowerCase()
            : '';

          let dir = 'assets';
          if (ext === 'css') dir = 'styles';
          else if (
            [
              'png',
              'jpg',
              'jpeg',
              'gif',
              'webp',
              'avif',
              'svg',
              'ico',
            ].includes(ext)
          ) {
            dir = 'images';
          } else if (['woff', 'woff2', 'ttf', 'otf', 'eot'].includes(ext)) {
            dir = 'fonts';
          }
          return `assets/${dir}/[name]-[hash].[ext]`;
        },
      },
    },
  },
});
