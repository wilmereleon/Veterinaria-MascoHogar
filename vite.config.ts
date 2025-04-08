import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Usa el puerto 3000 o cámbialo si es necesario
    open: true, // Abre automáticamente el navegador al iniciar el servidor
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