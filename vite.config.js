import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  main: 'src/index.jsx',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
