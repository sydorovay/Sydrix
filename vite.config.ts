import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import svgrPlugin from 'vite-plugin-svgr';  

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    visualizer({ open: true, filename: 'dist/bundle-report.html' }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    chunkSizeWarningLimit: 600, // збільшив ліміт, щоб не було зайвих попереджень
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('lodash')) {
              return 'lodash-vendor';
            }
            // Тут можеш додати ще великі бібліотеки
            return 'vendor';
          }
        },
        // Виключити великий inline chunk для кращої читабельності
        inlineDynamicImports: false,
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  define: {
    'process.env': {},
  },
});
