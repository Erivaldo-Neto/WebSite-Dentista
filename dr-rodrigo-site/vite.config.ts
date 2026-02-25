import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096, // arquivos menores que 4kb viram base64 inline
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  server: {
    hmr: { overlay: false }
  }
})
