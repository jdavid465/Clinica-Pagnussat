
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'docs',
  plugins: [react()],
  base: '/SISTEMA-VET/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
