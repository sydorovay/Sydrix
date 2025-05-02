import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  },
  server: {
    proxy: {
      '/': {
        target: 'http://localhost', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/(.*)$/, '/index.html')
      }
    }
  }
})
