import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation, Navigate } from "react-router-dom";
import VeterinariaMascoHogar from "./pages/Home/VeterinariaMascoHogar";
import PaginaDeNoticias from "./pages/News/PginaDeNoticias"; // Importación de la página de noticias

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "Veterinaria MascoHogar - Inicio"; // Título predeterminado
    let metaDescription = "Bienvenido a Veterinaria MascoHogar."; // Meta descripción predeterminada

    if (pathname === "/veterinaria-mascohogar-pc-home") {
      title = "Veterinaria MascoHogar";
      metaDescription = "Descubre los servicios de nuestra veterinaria.";
    } else if (pathname === "/noticias") {
      title = "Noticias - Veterinaria MascoHogar";
      metaDescription = "Mantente informado con las últimas noticias y consejos para el cuidado de tus mascotas.";
    }

    document.title = title;

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
    </Routes>
  );
}

export default App;