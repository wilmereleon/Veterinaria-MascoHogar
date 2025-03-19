import { FunctionComponent } from "react";
import TypeFloatingHeaderWithNavi from "../components/TypeFloatingHeaderWithNavi";
import TypeStackedMediumTitleAnd from "../components/TypeStackedMediumTitleAnd";
import TypeSideBySideImages from "../components/TypeSideBySideImages";
import Property1CardsTestimonials from "../components/Property1CardsTestimonials";
import TypeImageGridTitleDescri from "../components/TypeImageGridTitleDescri";
import Property1SoftwareHeroTripl from "../components/Property1SoftwareHeroTripl";
import TypeSubscribePillInputCT from "../components/TypeSubscribePillInputCT";
import styles from "./VeterinariaMascoHogar.module.css";

const VeterinariaMascoHogar: FunctionComponent = () => {
  return (
    <div className={styles.veterinariaMascohogarOpcin}>
      <TypeFloatingHeaderWithNavi />
      <TypeStackedMediumTitleAnd />
      <TypeSideBySideImages />
      <Property1CardsTestimonials />
      <TypeImageGridTitleDescri />
      <Property1SoftwareHeroTripl />
      <TypeSubscribePillInputCT />
      <div className={styles.typestackedSimpleFooter}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <div className={styles.brandname}>Equipo MascoHogar</div>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>Sobre nosotros</div>
            <div className={styles.link}>Nuestro trabajo</div>
            <div className={styles.link}>LinkedIn</div>
            <div className={styles.link}>Contáctanos</div>
          </div>
        </div>
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.brandNameAll}>
              © 2025 Veterinaria MascoHogar. Todos los derechos reservados.
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.brandNameAll}>Política de privacidad</div>
              <div className={styles.brandNameAll}>Términos del servicio</div>
              <div className={styles.brandNameAll}>
                Configuración de cookies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeterinariaMascoHogar;