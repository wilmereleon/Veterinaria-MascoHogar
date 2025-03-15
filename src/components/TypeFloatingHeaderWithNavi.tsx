import { FunctionComponent } from "react";
import styles from "./TypeFloatingHeaderWithNavi.module.css";

export type TypeFloatingHeaderWithNaviType = {
  className?: string;
};

const TypeFloatingHeaderWithNavi: FunctionComponent<
  TypeFloatingHeaderWithNaviType
> = ({ className = "" }) => {
  return (
    <header
      className={[styles.typefloatingHeaderWithNavi, className].join(" ")}
    >
      <div className={styles.brand}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
        <div className={styles.brandname}>PetCare Hub</div>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navLinks1}>
          <div className={styles.navLink}>
            <div className={styles.brandname}>Home</div>
          </div>
          <div className={styles.navLink}>
            <div className={styles.brandname}>About Us</div>
          </div>
          <div className={styles.navLink2}>
            <div className={styles.brandname}>Our Team</div>
          </div>
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.brandname}>Login</div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.textContainer1}>
              <div className={styles.brandname}>Register Now</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TypeFloatingHeaderWithNavi;
