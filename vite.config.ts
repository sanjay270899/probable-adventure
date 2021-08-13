import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@assets': './assets',
      '@components': './components',
      '@config': './config',
      '@hooks': './hooks',
      '@interfaces': './interfaces',
      '@pages': './pages',
      '@services': './services',
      '@state': './state',
      '@utils': './utils'
    }
  }
})
