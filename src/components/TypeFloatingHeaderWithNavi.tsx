import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TypeFloatingHeaderWithNavi.module.css";
import { FaBars, FaUser, FaCog, FaHome, FaInfoCircle, FaUsers} from "react-icons/fa";
import { MdViewSidebar } from "react-icons/md";
import { BsFillMenuButtonFill } from "react-icons/bs";

const TypeFloatingHeaderWithNavi: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtiene la ruta actual
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [username, setUsername] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú desplegable

  useEffect(() => {
    if (isAuthenticated) {
      const storedUsername = localStorage.getItem("username") || "Usuario";
      setUsername(storedUsername);
    }
  }, [isAuthenticated]);

  const onLogoutClick = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    navigate("/veterinaria-mascohogar-pc-home"); // Redirige al Home después de cerrar sesión
  };

  const onHomeClick = () => {
    navigate("/veterinaria-mascohogar-pc-home");
  };

  const onMenuClick = () => {
    navigate("/menu");
  };

  const onProfileClick = () => {
    navigate("/perfil");
  };

  const onSettingsClick = () => {
    navigate("/configuracion");
  };

  const onServicesClick = () => {
    navigate("/entorno-sesion");
  };

  // Verifica si estamos en la vista `VistaDeEntornoDeSesionUsu`
  const isEntornoSesionView = location.pathname === "/entorno-sesion";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${
        isEntornoSesionView ? styles.entornoSesionNavbar : styles.navbar
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)} // Cambia el estado del menú al hacer clic
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className={`navbar-brand ms-2 d-flex align-items-center ${styles.logo}`}
          onClick={onHomeClick}
          style={{ cursor: "pointer" }}
        >
          <img src="/icon.svg" alt="Logo" width="50" height="50" />
          <div className={styles.logoText}>
            <span className={styles.veterinaria}>Veterinaria</span>
            <span className={styles.mascoHogar}>MascoHogar</span>
          </div>
        </a>
        <div
          className={`collapse navbar-collapse ${styles.collapse}`}
          style={{
            display: menuOpen ? "flex" : "none", // Controla la visibilidad del menú
          }}
        >
          <ul className="navbar-nav ms-auto">
            {/* Enlace Inicio */}
            <li className="nav-item">
              <button
                className={`btn nav-link ${styles.navLink}`}
                onClick={onHomeClick}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <span className={styles.navLinkIcon}>
                  <FaHome />
                </span>
                Inicio
              </button>
            </li>
            {isEntornoSesionView ? (
              <>
                {/* Enlaces específicos para VistaDeEntornoDeSesionUsu */}
                <li className="nav-item">
                  <button
                    className={`btn nav-link ${styles.navLink}`}
                    onClick={onMenuClick}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    
                    <span className={styles.navLinkIcon}>
                      <BsFillMenuButtonFill />
                    </span>
                    Menú
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn nav-link ${styles.navLink}`}
                    onClick={onProfileClick}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    
                    <span className={styles.navLinkIcon}>
                      <FaUser />
                    </span>
                    Perfil
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`btn nav-link ${styles.navLink}`}
                    onClick={onSettingsClick}
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    
                    <span className={styles.navLinkIcon}>
                      <FaCog />
                    </span>
                    Configuración
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Enlaces generales */}
                <li className="nav-item">
                  <a className={`nav-link ${styles.navLink}`} href="/about">
                    <span className={styles.navLinkIcon}>
                      <FaInfoCircle />
                    </span>
                    Acerca de
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${styles.navLink}`} href="/team">
                    <span className={styles.navLinkIcon}>
                      <FaUsers />
                    </span>
                    Equipo
                  </a>
                </li>
                {!isAuthenticated && (
                  <>
                    {/* Botón Iniciar sesión */}
                    <li className="nav-item">
                      <button
                        className={`btn ${styles.loginButton}`}
                        onClick={() => navigate("/login")}
                      >
                        Iniciar sesión
                      </button>
                    </li>
                    {/* Botón Regístrate */}
                    <li className="nav-item">
                      <button
                        className={`btn ${styles.registerButton}`}
                        onClick={() => navigate("/registro")}
                      >
                        Regístrate
                      </button>
                    </li>
                  </>
                )}
                {isAuthenticated && (
                  <li className="nav-item">
                    <button
                      className={`btn nav-link ${styles.navLink}`}
                      onClick={onServicesClick}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      
                      <span className={styles.navLinkIcon}>
                        <MdViewSidebar />
                      </span>
                      Servicios
                    </button>
                  </li>
                )}
              </>
            )}
            {/* Mostrar "Hola, Usuario" si está autenticado */}
            {isAuthenticated && (
              <li className="nav-item">
                <span className={`nav-link ${styles.userGreeting}`}>
                  Hola, {username}
                </span>
              </li>
            )}
            {/* Botón Cerrar sesión */}
            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className={`btn btn-link nav-link ${styles.logoutButton}`}
                  onClick={onLogoutClick}
                >
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TypeFloatingHeaderWithNavi;