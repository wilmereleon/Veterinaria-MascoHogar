import { FunctionComponent } from "react";
import styles from "./TypeFloatingHeaderWithNavi.module.css";

export type TypeFloatingHeaderWithNaviType = {
  className?: string;
};

const TypeFloatingHeaderWithNavi: FunctionComponent<
  TypeFloatingHeaderWithNaviType
> = ({ className = "" }) => {
  return (
    <div className={[styles.typefloatingHeaderWithNavi, className].join(" ")}>
      <div className={styles.brand}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.brandname}>Veterinaria MascoHogar</div>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navLinks1}>
          <div className={styles.navLink}>
            <div className={styles.brandname}>Inicio</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.brandname}>Acerca de</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.brandname}>Equipo</div>
          </div>
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.brandname}>Iniciar sesión</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.textContainer}>
              <div className={styles.brandname}>Registrarse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeFloatingHeaderWithNavi;