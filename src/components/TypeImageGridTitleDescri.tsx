import { FunctionComponent } from "react";
import styles from "./TypeImageGridTitleDescri.module.css";

/**
 * Tipo de las props para el componente `TypeImageGridTitleDescri`.
 */
export type TypeImageGridTitleDescriType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `TypeImageGridTitleDescri`.
 *
 * Este componente representa una sección con un título, subtítulo, un botón de llamada a la acción
 * y una cuadrícula de imágenes. Es ideal para destacar características o beneficios visuales.
 *
 * @component
 * @param {TypeImageGridTitleDescriType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `TypeImageGridTitleDescri`.
 */
const TypeImageGridTitleDescri: FunctionComponent<TypeImageGridTitleDescriType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.typeimageGridTitleDescri, className].join(" ")}>
      <div className={styles.content}>
        {/* Contenedor de texto */}
        <div className={styles.textContainer}>
          <div className={styles.bio}>
            {/* Título principal */}
            <div className={styles.thisIsA}>
              Únase a nuestra comunidad de amantes de los animales de compañía
            </div>
            {/* Subtítulo */}
            <div className={styles.aMediumLength}>
              Descubre una plataforma que te conecta con las necesidades de tu
              animal de compañía.
            </div>
          </div>
          {/* Botón de llamada a la acción */}
          <div className={styles.ctaButton}>
            <div className={styles.textContainer1}>
              <div className={styles.cta}>Regístrate ahora</div>
            </div>
          </div>
        </div>
        {/* Cuadrícula de imágenes */}
        <div className={styles.cardsGrid}>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt="Imagen 1"
              src="/image-lummi-1@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt="Imagen 2"
              src="/image-lummi-2@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt="Imagen 3"
              src="/image-lummi-3@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt="Imagen 4"
              src="/image-lummi-4@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt="Imagen 5"
              src="/image-lummi-5@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt="Imagen 6"
              src="/image-lummi-6@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeImageGridTitleDescri;