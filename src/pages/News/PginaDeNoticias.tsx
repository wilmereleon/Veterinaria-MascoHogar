import { FunctionComponent } from "react";
import MainHeader from "../../components/News/MainHeader"; // Ruta ajustada
import Contents from "../../components/News/Contents"; // Ruta ajustada
import Reviews from "../../components/News/Reviews"; // Ruta ajustada
import TypeStackedSimpleFooter from "../../components/News/TypeStackedSimpleFooter"; // Ruta ajustada
import styles from "./PginaDeNoticias.module.css";

const PginaDeNoticias: FunctionComponent = () => {
  return (
    <div className={styles.pginaDeNoticias}>
      <MainHeader />
      <div className={styles.section}>
        <div className={styles.container}>
          <b className={styles.title}></b>
          <div className={styles.description}>
          </div>
        </div>
      </div>
      <Contents />
      <Reviews />
      <TypeStackedSimpleFooter />
    </div>
  );
};

export default PginaDeNoticias;