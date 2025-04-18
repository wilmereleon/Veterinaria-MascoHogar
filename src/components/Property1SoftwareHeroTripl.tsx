import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Importación de useNavigate
import styles from "./Property1SoftwareHeroTripl.module.css";

/**
 * Tipo de las props para el componente `Property1SoftwareHeroTripl`.
 */
export type Property1SoftwareHeroTriplType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `Property1SoftwareHeroTripl`.
 *
 * Este componente representa una sección destacada con un encabezado, subtítulo, botones de acción
 * y elementos visuales interactivos. Incluye funcionalidad para redirigir a la página de noticias.
 *
 * @component
 * @param {Property1SoftwareHeroTriplType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `Property1SoftwareHeroTripl`.
 */
const Property1SoftwareHeroTripl: FunctionComponent<
  Property1SoftwareHeroTriplType
> = ({ className = "" }) => {
  const navigate = useNavigate(); // Hook para la navegación

  /**
   * Maneja el clic en el botón principal.
   * Redirige al usuario a la página de noticias.
   */
  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/noticias"); // Redirige a la página de noticias
  }, [navigate]);

  return (
    <div className={[styles.property1softwareHeroTripl, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.copyContainer}>
          <div className={styles.copyComponent}>
            {/* Encabezado y subtítulo */}
            <div className={styles.headingText}>
              <div className={styles.heading}>
                Manténgase actualizado con nuestras noticias
              </div>
              <div className={styles.subheading}>
                Suscríbete para recibir las últimas actualizaciones y consejos.
              </div>
            </div>
            {/* Botones de acción */}
            <div className={styles.buttonCombo}>
              <div
                className={styles.ctaButton}
                onClick={onCTAButtonContainerClick} // Evento de clic para redirigir
              >
                <div className={styles.textContainer}>
                  <div className={styles.cta}>Leer más</div>
                </div>
              </div>
              <div className={styles.secondaryButton}>
                <div className={styles.textContainer1}>
                  <div className={styles.cta}>Obtenga más información</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Elementos visuales interactivos */}
        <div className={styles.mediaLayouts}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img className={styles.deviceIcon} alt="" src="/device@2x.png" />
            <div className={styles.deviceWrapper}>
              <div className={styles.device}>
                <img
                  className={styles.iphone14Starlight1}
                  alt="Dispositivo móvil"
                  src="/iphone-14--starlight-1@2x.png"
                />
                <img
                  className={styles.screenContentImageLummi}
                  alt="Contenido de pantalla"
                  src="/screen-content-image--lummi@2x.png"
                />
              </div>
            </div>
            <img className={styles.deviceIcon1} alt="" src="/device-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1SoftwareHeroTripl;