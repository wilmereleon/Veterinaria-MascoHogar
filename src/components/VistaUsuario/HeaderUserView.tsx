import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderUserView.module.css";

export type HeaderUserViewType = {
  className?: string;
};

const HeaderUserView: FunctionComponent<HeaderUserViewType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInicioClick = useCallback(() => {
    navigate("/veterinaria-mascohogar-pc-home");
  }, [navigate]);

  const onMenuClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPerfilClick = useCallback(() => {
    navigate("/perfil");
  }, [navigate]);

  const onConfiguracionClick = useCallback(() => {
    navigate("/configuracion");
  }, [navigate]);

  const onSalirClick = useCallback(() => {
    navigate("/login"); 
  }, [navigate]);

  return (
    <header className={[styles.typefloatingHeaderWithNavi, className].join(" ")}>
      <div className={styles.brand}>
        <img className={styles.icon} alt="Logo" src="/icon3.svg" />
        <div className={styles.brandname}>
          <span className={styles.brandnameTxt}>
            <span className={styles.span}>Veterinaria</span>
            <span className={styles.mascohogar}> MascoHogar</span>
          </span>
        </div>
      </div>

      <nav className={styles.navLinks}>
        <div className={styles.navLinks1}>
          <div className={styles.navLink} onClick={onInicioClick}>
            <div className={styles.navLabel}>Inicio</div>
          </div>
          <div className={styles.navLink} onClick={onMenuClick}>
            <div className={styles.navLabel}>Menú</div>
          </div>
          <div className={styles.navLink} onClick={onPerfilClick}>
            <div className={styles.navLabel}>Perfil</div>
          </div>
          <div className={styles.navLink} onClick={onConfiguracionClick}>
            <div className={styles.navLabel}>Configuración</div>
          </div>
          <div className={styles.navLink} onClick={onSalirClick}>
            <div className={styles.textContainer}>
              <div className={styles.navLabel}>Salir</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderUserView;