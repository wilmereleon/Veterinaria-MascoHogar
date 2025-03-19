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
        <img className={styles.icon1} alt="" src="/icon.png" />
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
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.navLabel}>Iniciar sesión</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.textContainer}>
              <div className={styles.navLabel}>Registrarse</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeFloatingHeaderWithNavi;