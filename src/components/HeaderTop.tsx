import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importa Link y useNavigate para manejar la navegación entre rutas
import Brand from "./Brand"; // Componente que muestra el logotipo de la aplicación
import styles from "./HeaderTop.module.css"; // Importa los estilos específicos para este componente

/**
 * Tipo de las propiedades que acepta el componente HeaderTop.
 * @property {string} [className] - Clase CSS adicional para personalizar el estilo del componente.
 */
export type HeaderTopType = {
  className?: string;
};

/**
 * Componente HeaderTop.
 *
 * Este componente representa el encabezado superior de la aplicación, que incluye:
 * - El logotipo de la aplicación.
 * - Enlaces de navegación como Inicio, Menú, Perfil y Configuración.
 * - Un enlace para cerrar sesión (Salir).
 *
 * @component
 * @param {HeaderTopType} props - Propiedades del componente.
 * @returns {JSX.Element} El encabezado superior con enlaces de navegación.
 */
const HeaderTop: FunctionComponent<HeaderTopType> = ({ className = "" }) => {
  const navigate = useNavigate(); // Hook para manejar la navegación entre rutas

  /**
   * Maneja el cierre de sesión del usuario.
   * - Elimina el estado de autenticación almacenado en `localStorage`.
   * - Redirige al usuario a la página de inicio (Home).
   */
  const onLogoutClick = useCallback(() => {
    localStorage.removeItem("isAuthenticated"); // Elimina el estado de autenticación
    localStorage.removeItem("username"); // Elimina el nombre del usuario
    navigate("/veterinaria-mascohogar-pc-home"); // Redirige al Home
  }, [navigate]);

  return (
    <div className={[styles.typefloatingHeaderWithNavi, className].join(" ")}>
      {/* Componente Brand que muestra el logotipo */}
      <Brand icon="/icon3.svg" />

      {/* Contenedor de los enlaces de navegación */}
      <div className={styles.navLinks}>
        <div className={styles.navLinks1}>
          {/* Enlace al inicio */}
          <div className={styles.navLinkWrapper}>
            <Link to="/veterinaria-mascohogar-pc-home" className={styles.navLink}>
              <div className={styles.navLabel}>Inicio</div>
            </Link>
          </div>

          {/* Enlace al menú */}
          <div className={styles.navLink1}>
            <div className={styles.navLabel1}>Menú</div>
          </div>

          {/* Enlace al perfil */}
          <div className={styles.navLink2}>
            <div className={styles.navLabel1}>Perfil</div>
          </div>

          {/* Enlace a la configuración */}
          <div className={styles.navLink3}>
            <div className={styles.navLabel3}>Configuración</div>
          </div>

          {/* Enlace para salir (cerrar sesión) */}
          <div className={styles.navLink4} onClick={onLogoutClick}>
            <div className={styles.navLabel}>Salir</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;