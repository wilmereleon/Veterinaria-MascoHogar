import { FunctionComponent, useCallback } from "react";
import Medicamentos from "./Medicamentos";
import styles from "./ContenedorServicios.module.css";

export type ContenedorServiciosType = {
  className?: string;
};

const ContenedorServicios: FunctionComponent<ContenedorServiciosType> = ({
  className = "",
}) => {
  const onMedicamentosContainerClick = useCallback(() => {
    // Please sync "Vista de entorno de solicitud de citas usuario:cliente" to the project
  }, []);

  return (
    <div className={[styles.contenedorServicios, className].join(" ")}>
      <div className={styles.contenedorDeServicios} />
      <div className={styles.ttuloDeServicios}>
        <div className={styles.servicios}>Servicios</div>
      </div>
      <Medicamentos
        onMedicamentosContainerClick={onMedicamentosContainerClick}
        medkit="/medkit1.svg"
        cTA="Solicitud y cancelación de citas"
      />
      <Medicamentos
        medicamentosLeft="255px"
        medicamentosTop="72px"
        medicamentosHeight="100px"
        medkit="/medkit2.svg"
        cTA="Solicitud y ayudas diagnósticas"
        cTAWidth="144px"
      />
      <Medicamentos
        medicamentosLeft="145px"
        medicamentosTop="192px"
        medicamentosHeight="69px"
        medkit="/medkit3.svg"
        cTA="Historia clínica"
        cTAWidth="109px"
      />
    </div>
  );
};

export default ContenedorServicios;
