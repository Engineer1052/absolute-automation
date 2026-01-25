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
                contact: resolve(__dirname, 'contact.html'),
                'factory-automation': resolve(__dirname, 'factory-automation.html'),
                'compact-custom-machinery': resolve(__dirname, 'compact-custom-machinery.html'),
                'control-panel-assembly': resolve(__dirname, 'control-panel-assembly.html'),
                'systems-integration': resolve(__dirname, 'systems-integration.html'),
                'field-service': resolve(__dirname, 'field-service.html')
            }
        }
    }
})
