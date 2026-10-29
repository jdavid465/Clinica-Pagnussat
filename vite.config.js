import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Informa ao Vite que o projeto base e o index.html estão dentro da pasta docs
  root: 'docs', 
  build: {
    outDir: './', // Mantém o build final dentro da própria pasta docs
    emptyOutDir: false,
  },
})