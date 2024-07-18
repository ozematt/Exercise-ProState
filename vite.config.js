import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath =
  '13_Best_practices_i_optymalizacja_TanStack_Query/01_Praktyczne_zastosowanie_Best_Practices_TanStack_Query';

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
