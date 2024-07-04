import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '04_Optmalizacja_wydajnosci_z_useState_i_useReducer/02_Tworzenie_wydajnego_komponentu';

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
