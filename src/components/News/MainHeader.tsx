import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainHeader.module.css";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: FunctionComponent<MainHeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/vista-inicio-de-sesin");
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/vista-regstrate");
  }, [navigate]);

  return (
    <div className={[styles.typefloatingHeaderWithNavi, className].join(" ")}>
      <div className={styles.brand}>
        <img className={styles.icon} alt="" src="/icon5.svg" />
        <img className={styles.icon1} alt="" src="/icon1.png" />
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
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Inicio</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Acerca de</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.navLabel}>Equipo</div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.textContainer}>
              <div className={styles.navLabel}>Iniciar sesión</div>
            </div>
          </div>
          <div className={styles.button1} onClick={onButtonContainerClick1}>
            <div className={styles.textContainer}>
              <div className={styles.navLabel}>Registrarse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
