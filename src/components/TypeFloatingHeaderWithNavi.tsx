import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TypeFloatingHeaderWithNavi.module.css";

const TypeFloatingHeaderWithNavi: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [username, setUsername] = useState<string>("");

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
    navigate("/login"); // Navega a la vista de inicio de sesión
  };

  const onRegisterClick = () => {
    navigate("/registro"); // Navega a la vista de registro
  };

  const onHomeClick = () => {
    navigate("/veterinaria-mascohogar-pc-home"); // Navega a la vista de VeterinariaMascoHogar
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navbar}`}>
      <div className="container-fluid">
        {/* Botón de hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <a
          className={`navbar-brand ms-2 d-flex align-items-center ${styles.logo}`}
          onClick={onHomeClick}
          style={{ cursor: "pointer" }}
        >
          <img src="/icon.svg" alt="Logo" width="50" height="50" />
          <span className={styles.logoText}>Veterinaria MascoHogar</span>
        </a>

        {/* Menú desplegable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className={`btn nav-link ${styles.navLink}`}
                onClick={onHomeClick}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/about">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles.navLink}`} href="/team">
                Equipo
              </a>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a className={`nav-link ${styles.servicesLink}`} href="/entorno-sesion">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <span className={`nav-link ${styles.userGreeting}`}>Hola, {username}</span>
                </li>
                <li className="nav-item">
                  <button className={`btn btn-link nav-link ${styles.logoutButton}`} onClick={onLogoutClick}>
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