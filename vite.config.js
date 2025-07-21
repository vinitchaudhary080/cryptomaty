import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true,       // agar network pe bhi access chahiye
    port: 3000        // apni marzi ka port
  }
})
