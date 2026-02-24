import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Dividir chunks para carregamento paralelo
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
        }
      }
    },
    // Comprimir assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log em produção
        drop_debugger: true,
      }
    },
    // Threshold para avisos de chunk grande
    chunkSizeWarningLimit: 500,
  },
  // Otimizar dependências no dev (reduz tempo de reload)
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  server: {
    // Hot reload mais rápido
    hmr: { overlay: false },
    // Menos trabalho de resolução
    fs: { strict: false }
  },
})
