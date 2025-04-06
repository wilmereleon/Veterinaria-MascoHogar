import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TypeFloatingHeaderWithNavi.module.css";

/**
 * Componente de encabezado flotante con navegación.
 *
 * Este componente incluye un menú de navegación adaptable para pantallas grandes y móviles.
 * Permite a los usuarios autenticarse, navegar entre páginas y cerrar sesión.
 *
 * @component
 * @returns {JSX.Element} El encabezado con navegación.
 */
const TypeFloatingHeaderWithNavi: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú desplegable
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  ); // Estado para verificar si el usuario está autenticado
  const [username, setUsername] = useState<string>(""); // Estado para almacenar el nombre del usuario

  // Obtener el nombre del usuario desde localStorage al cargar el componente
  useEffect(() => {
    if (isAuthenticated) {
      const storedUsername = localStorage.getItem("username") || "Usuario";
      setUsername(storedUsername); // Establece el nombre del usuario
    }
  }, [isAuthenticated]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * Navega a la página de inicio.
   */
  const onHomeClick = useCallback(() => {
    navigate("/veterinaria-mascohogar-pc-home");
    setIsMenuOpen(false); // Cerrar el menú al navegar
  }, [navigate]);

  /**
   * Navega a la página "Acerca de".
   */
  const onAboutClick = useCallback(() => {
    navigate("/about");
    setIsMenuOpen(false); // Cerrar el menú al navegar
  }, [navigate]);

  /**
   * Navega a la página "Equipo".
   */
  const onTeamClick = useCallback(() => {
    navigate("/team");
    setIsMenuOpen(false); // Cerrar el menú al navegar
  }, [navigate]);

  /**
   * Navega a la página "Servicios".
   */
  const onServicesClick = useCallback(() => {
    navigate("/entorno-sesion");
    setIsMenuOpen(false); // Cerrar el menú al navegar
  }, [navigate]);

  // Cerrar sesión
  const onLogoutClick = useCallback(() => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setIsMenuOpen(false);
  }, []);

  /**
   * Navega a la página de inicio de sesión.
   */
  const onLoginClick = useCallback(() => {
    navigate("/login");
    setIsMenuOpen(false); // Cerrar el menú al navegar
  }, [navigate]);

  /**
   * Navega a la página de registro.
   */
  const onRegisterClick = useCallback(() => {
    navigate("/register");
    setIsMenuOpen(false); // Cerrar el menú al navegar
  }, [navigate]);

  return (
    <div className={styles.typefloatingHeaderWithNavi}>
      {/* Logo e ícono de hamburguesa */}
      <div className={styles.brand}>
        <svg
          className={styles.hamburgerIcon}
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
        <img className={styles.icon} alt="Logo" src="/icon.svg" />
        <span className={styles.brandname}>Veterinaria MascoHogar</span>
      </div>

      {/* Enlaces de navegación para pantallas grandes */}
      <div className={styles.navLinks}>
        <div className={styles.navLinks1}>
          <div className={styles.navLink} onClick={onHomeClick}>
            <div className={styles.navLabel}>Inicio</div>
          </div>
          <div className={styles.navLink} onClick={onAboutClick}>
            <div className={styles.navLabel}>Acerca de</div>
          </div>
          <div className={styles.navLink} onClick={onTeamClick}>
            <div className={styles.navLabel}>Equipo</div>
          </div>
          <div className={styles.navLink} onClick={onServicesClick}>
            <div className={styles.navLabel}>
              <b>Servicios</b> {/* Enlace en negrita */}
            </div>
          </div>
          {isAuthenticated ? (
            <>
              {/* Saludo al usuario autenticado */}
              <div className={styles.greeting}>Hola, {username}</div>
              <div className={styles.navLink} onClick={onLogoutClick}>
                <div className={styles.navLabel}>Cerrar sesión</div>
              </div>
            </>
          ) : (
            <>
              {/* Botones para iniciar sesión o registrarse */}
              <div className={styles.button} onClick={onLoginClick}>
                <div className={styles.textContainer}>
                  <div className={styles.navLabel}>Iniciar sesión</div>
                </div>
              </div>
              <div className={styles.button1} onClick={onRegisterClick}>
                <div className={styles.textContainer}>
                  <div className={styles.navLabel}>Registrarse</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeFloatingHeaderWithNavi;