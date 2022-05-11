import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    sourcemap: true,
    watch: {},
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vite-upm-react-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `vite-upm-react-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/icons-material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
