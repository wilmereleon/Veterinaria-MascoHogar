import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation, Navigate } from "react-router-dom";
import VeterinariaMascoHogar from "./pages/Home/VeterinariaMascoHogar";
import PaginaDeNoticias from "./pages/News/PginaDeNoticias"; // Importación de la página de noticias
import VistaInicioDeSesion from "./pages/AuthPages/VistaInicioDeSesion"; // Ruta corregida
import VistaDeEntornoDeSesionUsu from "./pages/ClientesPages/VistaDeEntornoDeSesionUsu";

/**
 * Componente principal `App`.
 *
 * Este componente define las rutas principales de la aplicación y gestiona el comportamiento global,
 * como el desplazamiento al inicio de la página al navegar y la actualización dinámica del título
 * y la meta descripción de la página según la ruta actual.
 *
 * @component
 * @returns {JSX.Element} El componente principal de la aplicación.
 */
function App() {
  /**
   * Tipo de navegación actual (e.g., "POP", "PUSH").
   * @type {string}
   */
  const action = useNavigationType();

  /**
   * Información sobre la ubicación actual en la aplicación.
   * @type {object}
   */
  const location = useLocation();

  /**
   * Ruta actual de la aplicación.
   * @type {string}
   */
  const pathname = location.pathname;

  /**
   * Efecto que desplaza la página al inicio al cambiar de ruta, excepto en navegaciones "POP".
   */
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  /**
   * Efecto que actualiza dinámicamente el título y la meta descripción de la página
   * según la ruta actual.
   */
  useEffect(() => {
    let title = "Veterinaria MascoHogar - Inicio"; // Título predeterminado
    let metaDescription = "Bienvenido a Veterinaria MascoHogar."; // Meta descripción predeterminada

    if (pathname === "/veterinaria-mascohogar-pc-home") {
      title = "Veterinaria MascoHogar";
      metaDescription = "Descubre los servicios de nuestra veterinaria.";
    } else if (pathname === "/noticias") {
      title = "Noticias - Veterinaria MascoHogar";
      metaDescription = "Mantente informado con las últimas noticias y consejos para el cuidado de tus mascotas.";
    } else if (pathname === "/login") {
      title = "Iniciar Sesión - Veterinaria MascoHogar";
      metaDescription = "Accede a tu cuenta en Veterinaria MascoHogar.";
    } else if (pathname === "/entorno-sesion") {
      title = "Bienvenido - Veterinaria MascoHogar";
      metaDescription = "Bienvenido a Veterinaria MascoHogar, Gestiona tus necesidades";
    }

    // Actualiza el título de la página
    document.title = title;

    // Actualiza la meta descripción de la página
    const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      {/* Redirección desde la raíz (/) a la ruta principal */}
      <Route
        path="/"
        element={<Navigate to="/veterinaria-mascohogar-pc-home" replace />}
      />
      <Route
        path="/veterinaria-mascohogar-pc-home"
        element={<VeterinariaMascoHogar />}
      />
      <Route
        path="/noticias"
        element={<PaginaDeNoticias />} // Nueva ruta para la página de noticias
      />
      <Route 
        path="/login" 
        element={<VistaInicioDeSesion />} // Ruta corregida
      />
      <Route 
        path="/entorno-sesion" 
        element={<VistaDeEntornoDeSesionUsu />} 
      />
    </Routes>
  );
}

export default App;