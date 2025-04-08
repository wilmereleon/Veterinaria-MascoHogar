import { FunctionComponent } from "react";
import styles from "./BottomFooter.module.css";

export type BottomFooterType = {
  className?: string;
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.opcionesAdicionales, className].join(" ")}>
      <div className={styles.opcionesAdicionalesChild} />
      <div className={styles.opcionesAdicionales1}>Opciones adicionales</div>
      <div className={styles.ctaButton}>
        <div className={styles.textContainer}>
          <img
            className={styles.chatbubblesSharpIcon}
            alt=""
            src="/chatbubblessharp.svg"
          />
          <div className={styles.cta}>Contactar</div>
        </div>
      </div>
      <div className={styles.ctaButton1}>
        <div className={styles.textContainer1}>
          <img
            className={styles.chatbubblesSharpIcon}
            alt=""
            src="/notificationssharp.svg"
          />
          <div className={styles.cta1}>Notificaciones</div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
