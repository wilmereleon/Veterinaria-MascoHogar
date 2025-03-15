import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.playIcon}>
          <h2 className={styles.whiteSpace}> </h2>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
        </div>
        <div className={styles.text}>
          <a className={styles.etgcEscaleta}>ETgc Escaleta</a>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.link}>
          <div className={styles.houseIcon}>
            <div className={styles.whiteSpace1}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-1.svg" />
          </div>
          <div className={styles.text1}>
            <a className={styles.inicio}>Inicio</a>
          </div>
        </div>
        <div className={styles.link1}>
          <div className={styles.houseIcon}>
            <div className={styles.whiteSpace1}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
          </div>
          <div className={styles.text2}>
            <a className={styles.historial}>Historial</a>
          </div>
        </div>
        <div className={styles.link2}>
          <div className={styles.houseIcon}>
            <div className={styles.whiteSpace1}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-3.svg" />
          </div>
          <div className={styles.text3}>
            <a className={styles.plantillas}>Plantillas</a>
          </div>
        </div>
        <div className={styles.link3}>
          <div className={styles.houseIcon}>
            <div className={styles.whiteSpace1}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-4.svg" />
          </div>
          <div className={styles.text4}>
            <a className={styles.mdulos}>Módulos</a>
          </div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.link4}>
          <div className={styles.bellIcon}>
            <div className={styles.whiteSpace5}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-5.svg" />
          </div>
        </div>
        <div className={styles.link4}>
          <div className={styles.bellIcon}>
            <div className={styles.whiteSpace5}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-6.svg" />
          </div>
        </div>
        <div className={styles.link4}>
          <div className={styles.bellIcon}>
            <div className={styles.whiteSpace5}> </div>
            <img className={styles.frameIcon1} alt="" src="/frame-7.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
