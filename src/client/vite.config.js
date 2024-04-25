import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
    /* proxy: {
      '/uploads': {
        target: 'http://localhost:5000/uploads/url-1700658505190-6562371.jpeg',
        changeOrigin: true
      }
    } */
  }
})