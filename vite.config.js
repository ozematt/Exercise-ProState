import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '05_Wprowadzenie_do_zaawansowanego_Context_API/02_Tworzenie_Contextu_i_Providerow';

/**
 * Don't change those lines below
 */
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  root: exercisePath,
  plugins: [react()],
});
