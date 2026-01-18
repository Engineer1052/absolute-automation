import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    clearScreen: false,
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                services: resolve(__dirname, 'services.html'),
                videos: resolve(__dirname, 'videos.html'),
                'case-studies': resolve(__dirname, 'case-studies.html'),
                contact: resolve(__dirname, 'contact.html')
            }
        }
    }
})
