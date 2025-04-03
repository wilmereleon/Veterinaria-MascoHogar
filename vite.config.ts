import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Usa el puerto 3000 o cámbialo si es necesario
    open: true, // Abre automáticamente el navegador al iniciar el servidor
  },
  build: {
    outDir: "dist", // Mantén la salida en la carpeta 'dist'
    sourcemap: true, // Genera mapas de origen para depuración
  },
  resolve: {
    alias: {
      "@": "/src", // Alias para simplificar las importaciones
      "@assets": "/public/assets", // Alias para acceder a las imágenes en 'public/assets'
    },
  },
});