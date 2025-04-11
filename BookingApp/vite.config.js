import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is correct
  },
  base: '/', // Adjust this if deploying to a subpath, e.g., '/BookingApp/'
});
