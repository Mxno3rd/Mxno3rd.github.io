import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [vitejs.dev](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // เปลี่ยนเป็นชื่อ repo ของคุณ
})
