import { ReportHandler } from "web-vitals";

/**
 * Función para medir el rendimiento de la aplicación.
 *
 * Esta función utiliza la biblioteca `web-vitals` para capturar métricas clave
 * como CLS, FID, FCP, LCP y TTFB. Si ocurre un error al cargar `web-vitals`,
 * se captura y se registra en la consola.
 *
 * @param {ReportHandler} [onPerfEntry] - Función opcional para manejar las métricas de rendimiento.
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error) => {
        console.error("Error loading web-vitals:", error);
      });
  }
};

export default reportWebVitals;