import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Se for build (produção), usa o nome do repositório. Se for local (dev), usa '/'
    base: command === 'serve' ? '/' : '/SISTEMA-VET/',
    build: {
      outDir: 'docs',
    },
  }
})