import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TypeFloatingHeaderWithNavi.module.css";

const TypeFloatingHeaderWithNavi: FunctionComponent = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"; // Verifica si el usuario está autenticado
  const [username, setUsername] = useState<string>(""); // Estado para almacenar el nombre del usuario

  // Obtener el nombre del usuario desde localStorage al cargar el componente
  useEffect(() => {
    if (isAuthenticated) {
      const storedUsername = localStorage.getItem("username") || "Usuario";
      setUsername(storedUsername);
    }
  }, [isAuthenticated]);

  // Navegar a la página de inicio
  const onHomeClick = useCallback(() => {
    navigate("/veterinaria-mascohogar-pc-home");
  }, [navigate]);

  // Navegar a la página "Acerca de"
  const onAboutClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  // Navegar a la página "Equipo"
  const onTeamClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  // Cerrar sesión
  const onLogoutClick = useCallback(() => {
    localStorage.removeItem("isAuthenticated"); // Elimina el estado de autenticación
    localStorage.removeItem("username"); // Elimina el nombre del usuario
    navigate("/login"); // Redirige al inicio de sesión
  }, [navigate]);

  // Navegar a la página de inicio de sesión
  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  // Navegar a la página de registro
  const onRegisterClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className={styles.typefloatingHeaderWithNavi}>
      <div className={styles.brand}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <b className={styles.brandname}>
          <span className={styles.brandnameTxt}>
            <span>Veterinaria</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.mascohogar}>MascoHogar</span>
          </span>
        </b>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navLinks1}>
          {/* Botón Inicio */}
          <div className={styles.navLink} onClick={onHomeClick}>
            <div className={styles.navLabel}>Inicio</div>
          </div>
          {/* Botón Acerca de */}
          <div className={styles.navLink} onClick={onAboutClick}>
            <div className={styles.navLabel}>Acerca de</div>
          </div>
          {/* Botón Equipo */}
          <div className={styles.navLink} onClick={onTeamClick}>
            <div className={styles.navLabel}>Equipo</div>
          </div>
          {/* Opciones dependiendo de la autenticación */}
          {isAuthenticated ? (
            <>
              {/* Mostrar saludo con el nombre del usuario */}
              <div className={styles.greeting}>
                Hola, {username}
              </div>
              {/* Botón Cerrar sesión */}
              <div className={styles.navLink} onClick={onLogoutClick}>
                <div className={styles.navLabel}>Cerrar sesión</div>
              </div>
            </>
          ) : (
            <>
              {/* Botón Iniciar sesión */}
              <div className={styles.button} onClick={onLoginClick}>
                <div className={styles.textContainer}>
                  <div className={styles.navLabel}>Iniciar sesión</div>
                </div>
              </div>
              {/* Botón Registrarse */}
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