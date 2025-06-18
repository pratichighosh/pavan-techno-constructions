import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  base: '/pavan-techno-constructions/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 800, // Increase the warning threshold if needed
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': ['@headlessui/react', 'framer-motion', 'react-responsive-carousel'],
          'icons': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', 
                   '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome', 'react-icons'],
          'animation': ['aos', 'react-countup', 'react-intersection-observer', 'react-scroll']
        }
      }
    }
  }
})
