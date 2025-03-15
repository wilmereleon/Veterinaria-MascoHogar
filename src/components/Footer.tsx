import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.copyrightWrapper}>
        <div className={styles.text}>
          <div className={styles.dcshaEscaleta}>© 2023 DCSHA Escaleta</div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialIcons}>
          <div className={styles.facebookLogoIcon}>
            <div className={styles.whiteSpace}> </div>
            <img className={styles.frameIcon} alt="" src="/frame-17.svg" />
          </div>
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.facebookLogoIcon}>
            <div className={styles.whiteSpace}> </div>
            <img className={styles.frameIcon} alt="" src="/frame-18.svg" />
          </div>
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.facebookLogoIcon}>
            <div className={styles.whiteSpace}> </div>
            <img className={styles.frameIcon} alt="" src="/frame-19.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
