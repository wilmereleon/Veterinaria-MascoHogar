import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VeterinariaMascoHogar from "./pages/VeterinariaMascoHogar";

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
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Inicio - Veterinaria";
        metaDescription = "Bienvenido a la página principal de nuestra veterinaria.";
        break;
<<<<<<< Updated upstream
      case "/veterinaria-mascohogar-opcin-1-home":
        title = "";
        metaDescription = "";
=======
      case "/veterinaria-mascohogar":
        title = "Veterinaria MascoHogar";
        metaDescription = "Descubre los servicios de nuestra veterinaria MascoHogar.";
        break;
      default:
        title = "Veterinaria";
        metaDescription = "Bienvenido a nuestra veterinaria.";
>>>>>>> Stashed changes
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<VeterinariaMascoHogar />} />
      <Route
        path="/veterinaria-mascohogar-opcin-1-home"
        element={<VeterinariaMascoHogar />}
      />
    </Routes>
  );
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
export default App;