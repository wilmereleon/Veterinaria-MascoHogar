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
  /**
   * Estado para controlar si el menú desplegable está abierto.
   * @type {boolean}
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Estado para verificar si el usuario está autenticado.
   * @type {boolean}
   */
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  /**
   * Estado para almacenar el nombre del usuario autenticado.
   * @type {string}
   */
  const [username, setUsername] = useState<string>("");

  /**
   * Hook para navegar entre rutas.
   * @type {Function}
   */
  const navigate = useNavigate();

  /**
   * Obtiene el nombre del usuario desde localStorage al cargar el componente.
   * Actualiza el estado `username` si el usuario está autenticado.
   */
  useEffect(() => {
    if (isAuthenticated) {
      const storedUsername = localStorage.getItem("username") || "Usuario";
      setUsername(storedUsername);
    }
  }, [isAuthenticated]);

  /**
   * Alterna el estado del menú desplegable.
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * Navega a la página de inicio.
   */
  const onHomeClick = useCallback(() => {
    navigate("/veterinaria-mascohogar-pc-home");
    setIsMenuOpen(false);
  }, [navigate]);

  /**
   * Navega a la página "Acerca de".
   */
  const onAboutClick = useCallback(() => {
    navigate("/about");
    setIsMenuOpen(false);
  }, [navigate]);

  /**
   * Navega a la página "Equipo".
   */
  const onTeamClick = useCallback(() => {
    navigate("/team");
    setIsMenuOpen(false);
  }, [navigate]);

  /**
   * Cierra la sesión del usuario.
   * Elimina los datos de autenticación del localStorage y actualiza el estado.
   */
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
    setIsMenuOpen(false);
  }, [navigate]);

  /**
   * Navega a la página de registro.
   */
  const onRegisterClick = useCallback(() => {
    navigate("/register");
    setIsMenuOpen(false);
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
          {isAuthenticated ? (
            <>
              <div className={styles.greeting}>Hola, {username}</div>
              <div className={styles.navLink} onClick={onLogoutClick}>
                <div className={styles.navLabel}>Cerrar sesión</div>
              </div>
            </>
          ) : (
            <>
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

      {/* Menú desplegable para dispositivos móviles */}
      <div className={`${styles.navMenu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.navMenuItem} onClick={onHomeClick}>
          <svg className={styles.navMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Inicio
        </div>
        <div className={styles.navMenuItem} onClick={onAboutClick}>
          <svg className={styles.navMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Acerca de
        </div>
        <div className={styles.navMenuItem} onClick={onTeamClick}>
          <svg className={styles.navMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45v1.5h6v-1.5c0-1.48-.81-2.61-1.97-3.45-.35-.03-.68-.05-.97-.05z" />
          </svg>
          Equipo
        </div>
        {isAuthenticated ? (
          <div className={styles.navMenuItem} onClick={onLogoutClick}>
            <svg className={styles.navMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7" />
            </svg>
            Cerrar sesión
          </div>
        ) : (
          <>
            <div className={styles.navMenuItem} onClick={onLoginClick}>
              <svg className={styles.navMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              Iniciar sesión
            </div>
            <div className={styles.navMenuItem} onClick={onRegisterClick}>
              <svg className={styles.navMenuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45v1.5h6v-1.5c0-1.48-.81-2.61-1.97-3.45-.35-.03-.68-.05-.97-.05z" />
              </svg>
              Registrarse
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TypeFloatingHeaderWithNavi;