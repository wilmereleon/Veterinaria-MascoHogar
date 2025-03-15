import { FunctionComponent } from "react";
import styles from "./Frame1.module.css";

export type Frame1Type = {
  className?: string;
};

const Frame1: FunctionComponent<Frame1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.heading}>
        <h3 className={styles.gestinDeLower}>Gestión de Lower Thirds</h3>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem1}>
          <div className={styles.text}>
            <div className={styles.tipo}>Tipo</div>
          </div>
          <div className={styles.text}>
            <div className={styles.tipo}>Texto</div>
          </div>
          <div className={styles.text}>
            <div className={styles.tipo}>Duración</div>
          </div>
          <div className={styles.text}>
            <div className={styles.tipo}>Acciones</div>
          </div>
        </div>
        <div className={styles.gridItem2}>
          <div className={styles.dropdown}>
            <div className={styles.ttulos}>Títulos</div>
            <img className={styles.svgIcon} alt="" src="/svg-1.svg" />
          </div>
          <div className={styles.input}>
            <div className={styles.tipo}>Texto del Lower Third</div>
          </div>
          <div className={styles.input}>
            <div className={styles.tipo}>00:10</div>
          </div>
          <div className={styles.button}>
            <div className={styles.trashIcon}>
              <div className={styles.whiteSpace}> </div>
              <img className={styles.frameIcon} alt="" src="/frame-15.svg" />
            </div>
            <div className={styles.text4}>
              <div className={styles.tipo}>Eliminar</div>
            </div>
          </div>
        </div>
        <div className={styles.gridItem3}>
          <div className={styles.text}>
            <div className={styles.tipo}>Total</div>
          </div>
          <div className={styles.frame1} />
          <div className={styles.text}>
            <div className={styles.tipo}>00:30</div>
          </div>
          <div className={styles.frame1} />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
