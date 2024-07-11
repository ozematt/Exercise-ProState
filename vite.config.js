import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '08_Wprowadzenie_do_React_Hook_Form/02_Zastosowanie_React_Hook_Form_w_dynamicznych_formularzach';

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
