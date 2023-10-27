import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import httpsPlugin from 'vite-plugin-https'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),httpsPlugin()],
})
