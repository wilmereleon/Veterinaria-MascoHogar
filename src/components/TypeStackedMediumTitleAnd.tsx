import { FunctionComponent, useRef } from "react";
import styles from "./TypeStackedMediumTitleAnd.module.css";

export type TypeStackedMediumTitleAndType = {
  className?: string;
};

const TypeStackedMediumTitleAnd: FunctionComponent<
  TypeStackedMediumTitleAndType
> = ({ className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.load(); // Reinicia el video y vuelve al estado inicial
    }
  };

  return (
    <div className={[styles.typestackedMediumTitleAnd, className].join(" ")}>
      <div className={styles.content}>
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