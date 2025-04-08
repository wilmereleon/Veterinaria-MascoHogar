import { FunctionComponent, useRef } from "react";
import styles from "./TypeStackedMediumTitleAnd.module.css";

/**
 * Tipo de las props para el componente `TypeStackedMediumTitleAnd`.
 */
export type TypeStackedMediumTitleAndType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `TypeStackedMediumTitleAnd`.
 *
 * Este componente representa una sección con un título apilado, subtítulo y un video interactivo.
 * Incluye un botón de llamada a la acción y un video que se puede reproducir o pausar al hacer clic.
 *
 * @component
 * @param {TypeStackedMediumTitleAndType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `TypeStackedMediumTitleAnd`.
 */
const TypeStackedMediumTitleAnd: FunctionComponent<TypeStackedMediumTitleAndType> = ({
  className = "",
}) => {
  /**
   * Referencia al elemento `<video>` para controlar su reproducción.
   * @type {React.RefObject<HTMLVideoElement>}
   */
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * Maneja el clic en el video.
   * Si el video está pausado, lo reproduce. Si está reproduciéndose, lo pausa.
   */
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  /**
   * Maneja el evento cuando el video finaliza.
   * Reinicia el video y vuelve al estado inicial.
   */
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <div className={[styles.typestackedMediumTitleAnd, className].join(" ")}>
      <div className={styles.content}>
        {/* Contenedor de texto */}
        <div className={styles.textContainer}>
          <div className={styles.figmaIpsumComponent}>
            Bienvenidos a nuestra plataforma para la atención de animales de
            compañía.
          </div>
          <div className={styles.figmaIpsumComponent1}>
            Gestiona todas las citas y servicios de tu animal de compañía con
            facilidad y eficiencia.
          </div>
          <div className={styles.buttonCombo}>
            <div className={styles.ctaButton}>
              <div className={styles.textContainer1}>
                <div className={styles.cta}>Comienza hoy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenedor del video */}
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            className={styles.video}
            onClick={handleVideoClick}
            onEnded={handleVideoEnded} // Evento que se activa al finalizar el video
            controls
            poster="/image-lummi@2x.png"
          >
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className={styles.playButton} onClick={handleVideoClick}>
            <img src="/play-icon.svg" alt="Play" className={styles.playIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeStackedMediumTitleAnd;