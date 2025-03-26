import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("No se encontró el elemento con ID 'root' en el DOM.");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Si no usas reportWebVitals, puedes eliminarlo