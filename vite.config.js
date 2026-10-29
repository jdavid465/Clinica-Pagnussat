import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SISTEMA-VET/', // Nome exato do seu repositório no GitHub (com as barras)
  build: {
    outDir: 'docs', // Garante que a compilação vai para a pasta docs
  },
})