import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    test: {
      testTimeout: 60000,
      hookTimeout: 60000
    }
  }
})
