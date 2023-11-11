import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // hot realod after some modification
  server: {
    watch: {
      usePolling: true
    }
  }
})

