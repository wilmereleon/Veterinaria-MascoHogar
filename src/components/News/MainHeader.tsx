import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainHeader.module.css";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para manejar el menú desplegable

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna el estado del menú
  };

  const onInicioClick = useCallback(() => {
    navigate("/veterinaria-mascohogar-pc-home"); // Redirige a la página principal
  }, [navigate]);

  const onAcercaClick = useCallback(() => {
    navigate("/acerca"); // Redirige a la página "Acerca de"
  }, [navigate]);

  const onEquipoClick = useCallback(() => {
    navigate("/equipo"); // Redirige a la página "Equipo"
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/login"); // Redirige a la página de inicio de sesión
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/vista-regstrate"); // Redirige a la página de registro
  }, [navigate]);

  return (
    <header className={[styles.typefloatingHeaderWithNavi, className].join(" ")}>
      <div className={styles.brand}>
        <img className={styles.icon} alt="Logo" src="/icon5.svg" />
        <img className={styles.icon1} alt="Icono adicional" src="/icon1.png" />
        <b className={styles.brandname}>
          <span className={styles.brandnameTxt}>
            <span>Veterinaria</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.mascohogar}>MascoHogar</span>
          </span>
        </b>
      </div>
      {/* Botón de hamburguesa para dispositivos móviles */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {/* Navegación */}
      <nav
        className={`${styles.navLinks1} ${
          menuOpen ? styles.visible : styles.hidden
        }`}
      >
        <a className={styles.navLink} onClick={onInicioClick}>
          Inicio
        </a>
        <a className={styles.navLink} onClick={onAcercaClick}>
          Acerca de
        </a>
        <a className={styles.navLink} onClick={onEquipoClick}>
          Equipo
        </a>
        <button className={styles.button} onClick={onButtonContainerClick}>
          Iniciar sesión
        </button>
        <button className={styles.button1} onClick={onButtonContainerClick1}>
          Registrarse
        </button>
      </nav>
    </header>
  );
};

export default MainHeader;