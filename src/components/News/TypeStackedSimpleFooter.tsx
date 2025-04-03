import { FunctionComponent } from "react";
import styles from "./TypeStackedSimpleFooter.module.css";

export type TypeStackedSimpleFooterType = {
  className?: string;
};

const TypeStackedSimpleFooter: FunctionComponent<
  TypeStackedSimpleFooterType
> = ({ className = "" }) => {
  return (
    <div className={[styles.typestackedSimpleFooter, className].join(" ")}>
      <img
        className={styles.typestackedSimpleFooterChild}
        alt=""
        src="/frame-1321314721.svg"
      />
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
            <div className={styles.brandNameAll}>Configuración de cookies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeStackedSimpleFooter;
