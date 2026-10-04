import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['tests/unit/**/*.{test,spec}.ts'],
    globals: true,
    setupFiles: ['tests/unit/setup.ts']
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),
      '#shared': path.resolve(__dirname, 'shared'),
      '#server': path.resolve(__dirname, 'server')
    }
  }
})