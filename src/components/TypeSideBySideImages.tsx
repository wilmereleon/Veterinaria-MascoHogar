import { FunctionComponent } from "react";
import Cards from "./Cards";
import styles from "./TypeSideBySideImages.module.css";

/**
 * Tipo de las props para el componente `TypeSideBySideImages`.
 */
export type TypeSideBySideImagesType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `TypeSideBySideImages`.
 *
 * Este componente representa una sección con imágenes y texto dispuestos lado a lado.
 * Incluye un encabezado, un subtítulo y una cuadrícula de características representadas por tarjetas.
 *
 * @component
 * @param {TypeSideBySideImagesType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `TypeSideBySideImages`.
 */
const TypeSideBySideImages: FunctionComponent<TypeSideBySideImagesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.typesideBySideImages, className].join(" ")}>
      <div className={styles.container}>
        {/* Encabezado y subtítulo */}
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            Administra los servicios requeridos por tu animal de compañía
          </div>
          <div className={styles.subheading}>
            Registre y realice un seguimiento fácil de su salud.
          </div>
        </div>

        {/* Cuadrícula de características */}
        <div className={styles.featureGrid}>
          <Cards
            imageLummi="/image--lummi@2x.png"
            featureTitle="Interfaz fácil de usar"
            featureDescription="Navegue sin esfuerzo a través de nuestro diseño intuitivo."
          />
          <Cards
            imageLummi="/image--lummi-1@2x.png"
            featureTitle="Perfiles de usuario seguros"
            featureDescription="Proteja sus datos con nuestro sistema de inicio de sesión seguro."
          />
        </div>
      </div>
    </div>
  );
};

export default TypeSideBySideImages;