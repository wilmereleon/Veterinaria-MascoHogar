import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

export type FrameType = {
  className?: string;
};

const Frame: FunctionComponent<FrameType> = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <div className={styles.frame1}>
        <div className={styles.heading}>
          <a className={styles.crearEscaleta}>Crear Escaleta</a>
        </div>
        <div className={styles.button}>
          <div className={styles.plusIcon}>
            <div className={styles.whiteSpace}> </div>
            <img className={styles.frameIcon} alt="" src="/frame-14.svg" />
          </div>
          <div className={styles.text}>
            <a className={styles.agregarFila}>Agregar Fila</a>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem1}>
          <div className={styles.text1}>
            <div className={styles.fila}>Fila</div>
          </div>
          <div className={styles.text1}>
            <div className={styles.fila}>Tipo</div>
          </div>
          <div className={styles.text1}>
            <div className={styles.fila}>Duración</div>
          </div>
          <div className={styles.text1}>
            <div className={styles.fila}>Acciones</div>
          </div>
        </div>
        <div className={styles.gridItem2}>
          <div className={styles.input}>
            <div className={styles.fila}>Nombre de la Fila</div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.entrada}>Entrada</div>
            <img className={styles.svgIcon} alt="" src="/svg.svg" />
          </div>
          <div className={styles.input}>
            <div className={styles.fila}>00:00</div>
          </div>
          <div className={styles.button1}>
            <div className={styles.plusIcon}>
              <div className={styles.whiteSpace}> </div>
              <img className={styles.frameIcon} alt="" src="/frame-15.svg" />
            </div>
            <div className={styles.text5}>
              <a className={styles.eliminar}>Eliminar</a>
            </div>
          </div>
        </div>
        <div className={styles.gridItem3}>
          <div className={styles.text1}>
            <div className={styles.fila}>Total</div>
          </div>
          <div className={styles.frame2} />
          <div className={styles.text1}>
            <div className={styles.fila}>00:00</div>
          </div>
          <div className={styles.frame2} />
        </div>
      </div>
    </div>
  );
};

export default Frame;
