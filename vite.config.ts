import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@config': './src/config',
      '@hooks': './src/hooks',
      '@interfaces': './src/interfaces',
      '@pages': './src/pages',
      '@services': './src/services',
      '@state': './src/state',
      '@utils': './src/utils'
    }
  }
})
