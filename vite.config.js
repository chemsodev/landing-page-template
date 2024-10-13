import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/landing-page-template/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', 
  },
  build: {
    outDir: 'dist', 
  },
})
