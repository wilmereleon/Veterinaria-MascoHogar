import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Usa el puerto 3000 o cámbialo si es necesario
    open: true, // Abre automáticamente el navegador al iniciar el servidor
    proxy: {
      '/api/clients': {
        target: 'http://localhost:8060', // Microservicio de clientes
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/clients/, '/api/clients'),
      },
      '/api/pets': {
        target: 'http://localhost:9090', // Microservicio de mascotas
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pets/, '/api/pets'),
      },
    },
  },
  build: {
    outDir: "build", // Cambiado de 'dist' a 'build' según el código descargado
    sourcemap: true, // Genera mapas de origen para depuración
  },
  resolve: {
    alias: {
      "@": "/src", // Alias para simplificar las importaciones
      "@assets": "/public/assets", // Alias para acceder a las imágenes en 'public/assets'
    },
  },
});