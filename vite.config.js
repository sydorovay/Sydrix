import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

export default defineConfig({
  plugins: [react()],
    server: {
      host: 'localhost',
      port: 5173,
      strictPort: true,
    },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src'), 
    },
  },
})