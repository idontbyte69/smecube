import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Uncomment and modify this if deploying to a subdirectory
  // For example, if deploying to https://example.com/smecube/
  // base: '/smecube/',
})
