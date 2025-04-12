import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TypeFloatingHeaderWithNavi.module.css";
import { FaHome, FaInfoCircle, FaUsers, FaSignInAlt, FaUserPlus, FaCog } from "react-icons/fa";

const TypeFloatingHeaderWithNavi: FunctionComponent = () => {
  const navigate = useNavigate();
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
  };

  const onLoginClick = () => {
    navigate("/login");
  };

  const onRegisterClick = () => {
    navigate("/registro");
  };

  const onHomeClick = () => {
    navigate("/veterinaria-mascohogar-pc-home");
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
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
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a className={`nav-link ${styles.servicesLink}`} href="/entorno-sesion">
                    <span className={styles.navLinkIcon}>
                      <FaCog />
                    </span>
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <span className={`nav-link ${styles.userGreeting}`}>Hola, {username}</span>
                </li>
                <li className="nav-item">
                  <button className={`btn btn-link nav-link ${styles.logoutButton}`} onClick={onLogoutClick}>
                    <span className={styles.navLinkIcon}>
                      <FaSignInAlt />
                    </span>
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className={`btn ${styles.loginButton}`} onClick={onLoginClick}>
                    Iniciar sesión
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`btn ${styles.registerButton}`} onClick={onRegisterClick}>
                    Regístrate
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TypeFloatingHeaderWithNavi;