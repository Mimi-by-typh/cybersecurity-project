import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base works on Netlify root and GitHub Pages subpaths (no custom domain needed).
  base: './',
})
