import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    // --- OPTIMIZATION STARTS HERE ---
    build: {
        chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kb
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // 1. Split React Router (Only needed for Admin)
                    if (id.includes('react-router-dom') || id.includes('@remix-run')) {
                        return 'vendor-router';
                    }

                    // 2. Split Framer Motion (Heavy Animation Library)
                    if (id.includes('framer-motion')) {
                        return 'vendor-framer';
                    }

                    // 3. Split Icons (FontAwesome / React Icons are heavy)
                    if (id.includes('fortawesome') || id.includes('react-icons') || id.includes('fa-')) {
                        return 'vendor-icons';
                    }

                    // 4. Split Charting Libraries (If you use them in Admin)
                    if (id.includes('recharts') || id.includes('chart.js')) {
                        return 'vendor-charts';
                    }
                    
                    // 5. Keep remaining node_modules in a separate vendor file
                    // This keeps your actual app code (app.js) very small
                    if (id.includes('node_modules')) {
                        return 'vendor-core';
                    }
                }
            }
        }
    }
});