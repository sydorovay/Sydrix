import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Визначаємо конфігурацію Vite
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: '0.0.0.0', // Доступ з інших пристроїв в локальній мережі
    port: 5173,      // Порт, на якому працює сервер
    strictPort: false, // Якщо порт зайнятий, Vite не вибиратиме інший порт
    open: true,       // Автоматичне відкриття браузера після старту сервера
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Аліас для шляху до папки 'src'
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]__[hash:base64:5]', // Формат імен класів для CSS-модулів
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Приклад імпорту змінних SCSS
      },
    },
  },
  build: {
    target: 'esnext',   // Цільова версія для транспіляції
    minify: 'esbuild',   // Використовуємо 'esbuild' для мінімізації
    sourcemap: true,     // Генерація sourcemap для зручності дебагу
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],  // Явно вказуємо бібліотеки для оптимізації залежностей
  },
});
