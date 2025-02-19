import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.JPG"],
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "typed.js": "typed.js",
    },
  },
  build: {
    rollupOptions: {
      external: ["typed.js"]
    }
  }

})
