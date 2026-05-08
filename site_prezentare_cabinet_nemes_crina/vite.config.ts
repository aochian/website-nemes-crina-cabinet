import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/site_prezentare_cabinet_nemes_crina/',
  plugins: [react(), tailwindcss()],
})
