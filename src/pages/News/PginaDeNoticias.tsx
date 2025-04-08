import { FunctionComponent } from "react";
import TypeFloatingHeaderWithNavi from "../../components/TypeFloatingHeaderWithNavi"; // Reutilizamos el encabezado de Home
import Contents from "../../components/News/Contents"; // Ruta ajustada
import Reviews from "../../components/News/Reviews"; // Ruta ajustada
import TypeStackedSimpleFooter from "../../components/News/TypeStackedSimpleFooter"; // Ruta ajustada
import styles from "./PginaDeNoticias.module.css";

const PginaDeNoticias: FunctionComponent = () => {
  return (
    <div className={styles.pginaDeNoticias}>
      {/* Encabezado reutilizado */}
      <TypeFloatingHeaderWithNavi />
      
      {/* Sección de contenido */}
      <div className={styles.section}>
        <div className={styles.container}>
          <b className={styles.title}></b>
          <div className={styles.description}></div>
        </div>
      </div>

      {/* Contenido principal */}
      <Contents />

      {/* Sección de comentarios */}
      <Reviews />

      {/* Pie de página */}
      <TypeStackedSimpleFooter />
    </div>
  );
};

export default PginaDeNoticias;