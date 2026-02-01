import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    clearScreen: false,
    plugins: [
        {
            name: 'html-ext-fallback',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    // Ignore API calls, static assets (with dots), or root
                    if (req.url === '/' || req.url.startsWith('/@') || req.url.includes('.')) {
                        return next();
                    }
                    // Rewrite to .html
                    req.url += '.html';
                    next();
                });
            }
        }
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                services: resolve(__dirname, 'services.html'),
                gallery: resolve(__dirname, 'gallery.html'),
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
