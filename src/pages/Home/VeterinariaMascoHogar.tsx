// Importaciones necesarias
import { FunctionComponent, useRef } from "react";
import TypeFloatingHeaderWithNavi from "../../components/TypeFloatingHeaderWithNavi"; // Encabezado flotante con navegación
import TypeStackedMediumTitleAnd from "../../components/TypeStackedMediumTitleAnd"; // Sección con título y subtítulo apilados
import TypeSideBySideImages from "../../components/TypeSideBySideImages"; // Sección con imágenes lado a lado
import Property1CardsTestimonials from "../../components/Property1CardsTestimonials"; // Tarjetas de testimonios
import TypeImageGridTitleDescri from "../../components/TypeImageGridTitleDescri"; // Cuadrícula de imágenes con descripciones
import Property1SoftwareHeroTripl from "../../components/Property1SoftwareHeroTripl"; // Sección destacada con contenido promocional
import TypeSubscribePillInputCT from "../../components/TypeSubscribePillInputCT"; // Formulario de suscripción
import styles from "./VeterinariaMascoHogar.module.css"; // Estilos específicos para este componente

// Componente principal de la página de inicio
const VeterinariaMascoHogar: FunctionComponent = () => {
  // Referencia al elemento <video> para controlar su reproducción
  const videoRef = useRef<HTMLVideoElement>(null);

  // Función para manejar el clic en el video
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Reproduce el video si está pausado
      } else {
        videoRef.current.pause(); // Pausa el video si está reproduciéndose
      }
    }
  };

  return (
    <div className={styles.veterinariaMascohogarPcH}>
      {/* Encabezado flotante con navegación */}
      <TypeFloatingHeaderWithNavi />

      {/* Sección con título y subtítulo apilados */}
      <TypeStackedMediumTitleAnd />

      {/* Sección con imágenes lado a lado */}
      <TypeSideBySideImages />

      {/* Tarjetas de testimonios */}
      <Property1CardsTestimonials />

      {/* Cuadrícula de imágenes con títulos y descripciones */}
      <TypeImageGridTitleDescri />

      {/* Sección destacada con contenido promocional */}
      <Property1SoftwareHeroTripl />

      {/* Formulario de suscripción */}
      <TypeSubscribePillInputCT />

      {/* Pie de página */}
      <div className={styles.typestackedSimpleFooter}>
        <div className={styles.content}>
          {/* Logo y nombre del equipo */}
          <div className={styles.logo}>
            <div className={styles.brandname}>Equipo MascoHogar</div>
          </div>

          {/* Enlaces del pie de página */}
          <div className={styles.links}>
            <div className={styles.link}>Sobre nosotros</div>
            <div className={styles.link}>Nuestro trabajo</div>
            <div className={styles.link}>LinkedIn</div>
            <div className={styles.link}>Contáctanos</div>
          </div>
        </div>

        {/* Créditos y enlaces legales */}
        <div className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            {/* Derechos reservados */}
            <div className={styles.brandNameAll}>
              © 2025 Veterinaria MascoHogar. Todos los derechos reservados.
            </div>

            {/* Enlaces legales */}
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

// Exporta el componente para ser utilizado en otras partes de la aplicación
export default VeterinariaMascoHogar;