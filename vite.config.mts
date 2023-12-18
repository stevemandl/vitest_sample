// vite.config.mts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      exclude: [
        "node_modules/"
      ]
    }
  },
  plugins: [vue()],
  resolve: {
    mainFields: ["module"]
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ["./tests/**/*.spec.ts"],
    root: "."
  },
  root: "."
});