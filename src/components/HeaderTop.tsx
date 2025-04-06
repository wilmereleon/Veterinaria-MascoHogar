import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import Brand from "./Brand";
import styles from "./HeaderTop.module.css";

export type HeaderTopType = {
  className?: string;
};

const HeaderTop: FunctionComponent<HeaderTopType> = ({ className = "" }) => {
  return (
    <div className={[styles.typefloatingHeaderWithNavi, className].join(" ")}>
      <Brand icon="/icon3.svg" />
      <div className={styles.navLinks}>
        <div className={styles.navLinks1}>
          <div className={styles.navLinkWrapper}>
            <Link to="/veterinaria-mascohogar-pc-home" className={styles.navLink}>
              <div className={styles.navLabel}>Inicio</div>
            </Link>
          </div>
          <div className={styles.navLink1}>
            <div className={styles.navLabel1}>Menú</div>
          </div>
          <div className={styles.navLink2}>
            <div className={styles.navLabel1}>Perfil</div>
          </div>
          <div className={styles.navLink3}>
            <div className={styles.navLabel3}>Configuración</div>
          </div>
          <div className={styles.navLink4}>
            <div className={styles.navLabel}>Salir</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;