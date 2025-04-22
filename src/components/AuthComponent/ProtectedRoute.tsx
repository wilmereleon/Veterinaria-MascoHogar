import { Navigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

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