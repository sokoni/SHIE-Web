import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        founders: resolve(__dirname, 'founders.html'),
        programs: resolve(__dirname, 'programs.html'),
        media: resolve(__dirname, 'media.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
