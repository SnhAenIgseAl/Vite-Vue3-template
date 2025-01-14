import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
        alias:{
            '@': path.resolve(__dirname, './src'),
            "../": path.resolve(__dirname, './src')
        },
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    base: '/',
    esbuild: {
        drop: ['console', 'debugger']
    }
})
