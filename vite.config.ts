import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // <--- CHANGED to .jsx
            ssr: 'resources/js/ssr.jsx', // <--- Changed to .jsx (if you renamed this too, otherwise delete this line)
            refresh: true,
        }),
        react(),
        // tailwindcss(), <--- REMOVED (You are using Bootstrap now)
        wayfinder({
            formVariants: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    server: {
        host: '0.0.0.0', // Listen on all network addresses
        hmr: {
            host: '192.168.0.102' // MUST match your computer's IP
        },
        cors: true, // Allow cross-origin requests
    },
});