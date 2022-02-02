import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


const build = {
    outDir: 'docs'
}

const ASSET_URL = process.env.ASSET_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build,
  base: `${ASSET_URL}/docs/`,  
})


