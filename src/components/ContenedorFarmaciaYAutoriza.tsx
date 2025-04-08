import { FunctionComponent } from "react";
import styles from "./ContenedorFarmaciaYAutoriza.module.css";

export type ContenedorFarmaciaYAutorizaType = {
  className?: string;
};

const ContenedorFarmaciaYAutoriza: FunctionComponent<
  ContenedorFarmaciaYAutorizaType
> = ({ className = "" }) => {
  return (
    <div className={[styles.contenedorFarmaciaYAutoriza, className].join(" ")}>
      <div className={styles.contenedorFarmaciaYAutorizaChild} />
      <div className={styles.reportes}>
        <div className={styles.repoButton}>
          <div className={styles.textContainer}>
            <img
              className={styles.mailUnreadIcon}
              alt=""
              src="/mailunread.svg"
            />
            <div className={styles.cta}>
              <span>{` `}</span>
              <span className={styles.reportes1}>{`Reportes  `}</span>
              <span>{` `}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.autorizaciones}>
        <div className={styles.autoButton}>
          <div className={styles.textContainer1}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.cta}>Autorizaciones</div>
          </div>
        </div>
      </div>
      <div className={styles.medicamentos}>
        <div className={styles.medButton}>
          <div className={styles.textContainer1}>
            <img className={styles.medkitIcon} alt="" src="/medkit.svg" />
            <div className={styles.cta}>Medicamentos</div>
          </div>
        </div>
      </div>
      <div className={styles.ttuloDeFarmaciaYAutorizac}>
        <div className={styles.farmaciaYAutorizaciones}>
          Farmacia y autorizaciones
        </div>
      </div>
    </div>
  );
};

export default ContenedorFarmaciaYAutoriza;
