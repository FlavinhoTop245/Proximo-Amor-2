import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Proximo-Amor-2/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'sobre.html'),
        login: resolve(__dirname, 'login.html'),
        signup: resolve(__dirname, 'cadastro.html'),
        jobs: resolve(__dirname, 'vagas.html'),
        calendar: resolve(__dirname, 'calendario.html'),
        map: resolve(__dirname, 'mapa.html'),
      },
    },
  },
});
