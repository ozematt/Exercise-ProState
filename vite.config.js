import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath =
  '03_Zaawansowane_techniki_z_useReducer_-_tworzenie_customowych_hookow_i_praktyczne_zastosowania/02_Custom_hooks_w_interakcjach_uzytkownika';

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
