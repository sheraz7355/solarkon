import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => {
    return {
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
        build: {
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    // ✅ FIX: Update the variable name here too
                    manualChunks: isSsrBuild ? undefined : (id) => {
                        // 1. Split React Router
                        if (id.includes('react-router-dom') || id.includes('@remix-run')) {
                            return 'vendor-router';
                        }

                        // 2. Split Framer Motion
                        if (id.includes('framer-motion')) {
                            return 'vendor-framer';
                        }

                        // 3. Split Icons
                        if (id.includes('fortawesome') || id.includes('react-icons') || id.includes('fa-')) {
                            return 'vendor-icons';
                        }

                        // 4. Split Charting Libraries
                        if (id.includes('recharts') || id.includes('chart.js')) {
                            return 'vendor-charts';
                        }
                        
                        // 5. Split Node Modules
                        if (id.includes('node_modules')) {
                            return 'vendor-core';
                        }
                    }
                }
            }
        }
    };
});