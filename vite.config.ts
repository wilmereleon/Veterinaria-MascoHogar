import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia el puerto si necesitas uno específico
    open: true, // Abre automáticamente el navegador al iniciar el servidor
  },
  build: {
    outDir: 'dist', // Asegúrate de que la salida sea en la carpeta 'dist'
    sourcemap: true, // Genera mapas de origen para depuración
  },
  resolve: {
    alias: {
      '@': '/src', // Agrega un alias para simplificar las importaciones
    },
  },
});