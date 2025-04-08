import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import styles from "./Medicamentos.module.css";

export type MedicamentosType = {
  className?: string;
  medkit?: string;
  cTA?: string;

  /** Style props */
  medicamentosLeft?: CSSProperties["left"];
  medicamentosTop?: CSSProperties["top"];
  medicamentosHeight?: CSSProperties["height"];
  cTAWidth?: CSSProperties["width"];

  /** Action props */
  onMedicamentosContainerClick?: () => void;
};

const Medicamentos: FunctionComponent<MedicamentosType> = ({
  className = "",
  onMedicamentosContainerClick,
  medicamentosLeft,
  medicamentosTop,
  medicamentosHeight,
  medkit,
  cTA,
  cTAWidth,
}) => {
  const medicamentosStyle: CSSProperties = useMemo(() => {
    return {
      left: medicamentosLeft,
      top: medicamentosTop,
    };
  }, [medicamentosLeft, medicamentosTop]);

  const medicamentos1Style: CSSProperties = useMemo(() => {
    return {
      height: medicamentosHeight,
    };
  }, [medicamentosHeight]);

  const cTAStyle: CSSProperties = useMemo(() => {
    return {
      width: cTAWidth,
    };
  }, [cTAWidth]);

  const onMedicamentosContainerClick1 = useCallback(() => {
    // Please sync "Vista de entorno de solicitud de citas usuario:cliente" to the project
  }, []);

  return (
    <div
      className={[styles.medicamentos, className].join(" ")}
      onClick={onMedicamentosContainerClick}
      style={medicamentosStyle}
    >
      <div className={styles.medButton}>
        <div className={styles.medicamentos1} style={medicamentos1Style}>
          <img className={styles.medkitIcon} alt="" src={medkit} />
          <div className={styles.cta} style={cTAStyle}>
            {cTA}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicamentos;
