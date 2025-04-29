import { Navigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Componente `ProtectedRoute` que protege rutas específicas en la aplicación.
 * 
 * Este componente verifica si el usuario está autenticado antes de permitir el acceso
 * a las rutas protegidas. Si el usuario no está autenticado, es redirigido a la página
 * de inicio de sesión.
 * 
 * Además, implementa una medida para prevenir que el navegador almacene en caché
 * la página protegida, asegurando que el usuario no pueda volver a ella utilizando
 * el botón de retroceso del navegador después de cerrar sesión.
 * 
 * @param {ProtectedRouteProps} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los componentes hijos que se renderizarán
 * dentro de la ruta protegida si el usuario está autenticado.
 * 
 * @returns {JSX.Element} - El contenido de la ruta protegida si el usuario está autenticado,
 * o una redirección a la página de inicio de sesión si no lo está.
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    // Prevenir que el navegador almacene en caché la página protegida
    const preventCache = () => {
      window.history.pushState(null, "", window.location.href);
    };

    preventCache();
    window.onpopstate = preventCache;

    return () => {
      window.onpopstate = null; // Limpia el evento al desmontar
    };
  }, []);

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al inicio de sesión
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;