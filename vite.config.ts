import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remote-app-one',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './CountButton': './src/components/CountButton.tsx',
                './store': './src/jotai/store.ts',
            },
            shared: ['react', 'react-dom', 'jotai']
        })],
    build:{
        target:['edge90','chrome90','firefox90','safari15'],
        modulePreload: false,
        minify: false,
        cssCodeSplit: false
    }
})
