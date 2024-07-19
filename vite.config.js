import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80, // Ensure the server runs on port 80 for HTTP
  },
  build: {
    outDir: 'dist', // Define output directory for the build
  },
})
