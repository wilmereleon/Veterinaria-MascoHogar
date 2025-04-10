import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // Importación de reportWebVitals
import { BrowserRouter } from "react-router-dom";
import "./global.css";

// Importa Bootstrap CSS y JS
import "bootstrap/dist/css/bootstrap.min.css"; // Asegura que los estilos de Bootstrap estén cargados
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa Bootstrap JS para el comportamiento del menú

/**
 * Punto de entrada principal de la aplicación.
 *
 * Este archivo monta el componente raíz `App` en el DOM utilizando React y configura
 * el enrutador `BrowserRouter` para gestionar las rutas de la aplicación.
 */

// Obtiene el contenedor principal del DOM donde se montará la aplicación
const container = document.getElementById("root");
if (!container) {
  throw new Error("No se encontró el elemento con ID 'root' en el DOM.");
}

// Crea la raíz de React utilizando el contenedor
const root = createRoot(container);

/**
 * Renderiza la aplicación principal.
 *
 * El componente `App` se envuelve en `BrowserRouter` para habilitar el enrutamiento
 * en toda la aplicación.
 */
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/**
 * Mide el rendimiento de la aplicación.
 *
 * Si deseas medir el rendimiento de tu aplicación, puedes pasar una función
 * para registrar los resultados (por ejemplo: reportWebVitals(console.log))
 * o enviarlos a un endpoint de análisis.
 * Más información: https://bit.ly/CRA-vitals
 */
reportWebVitals();