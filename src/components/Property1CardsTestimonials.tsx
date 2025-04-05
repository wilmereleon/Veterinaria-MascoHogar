import { FunctionComponent } from "react";
import Testimonial from "./Testimonial";
import styles from "./Property1CardsTestimonials.module.css";

/**
 * Tipo de las props para el componente `Property1CardsTestimonials`.
 */
export type Property1CardsTestimonialsType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `Property1CardsTestimonials`.
 *
 * Este componente representa una sección de testimonios de clientes. Incluye un encabezado
 * y una cuadrícula de testimonios que pueden ser renderizados directamente o mediante el
 * componente `Testimonial`.
 *
 * @component
 * @param {Property1CardsTestimonialsType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `Property1CardsTestimonials`.
 */
const Property1CardsTestimonials: FunctionComponent<
  Property1CardsTestimonialsType
> = ({ className = "" }) => {
  return (
    <div className={[styles.property1cardsTestimonials, className].join(" ")}>
      {/* Encabezado de la sección */}
      <div className={styles.heading}>Qué dicen nuestros clientes</div>

      {/* Cuadrícula de testimonios */}
      <div className={styles.testimonialsGrid}>
        {/* Testimonio directo */}
        <div className={styles.testimonial}>
          <img
            className={styles.imageLummiCategoryavata}
            alt="Avatar de María López"
            src="/image-lummi-categoryavatars@2x.png"
          />
          <div className={styles.name}>María López, dueña de mascota</div>
          <div className={styles.shortTestimonial}>
            «¡Esta plataforma ha transformado la forma en que gestiono a mis
            mascotas!»
          </div>
        </div>

        {/* Testimonios usando el componente `Testimonial` */}
        <Testimonial
          imageLummiCategoryavatars="/image-lummi-categoryavatars-1@2x.png"
          name1="Andrés Peláez, veterinario"
          shortTestimonial="«¡Una herramienta imprescindible para todo dueño de mascota!»"
        />
        <Testimonial
          imageLummiCategoryavatars="/image-lummi-categoryavatars-2@2x.png"
          name1="Catalina Vásquez, cliente feliz"
          shortTestimonial="«¡Me encanta la facilidad de uso y las fantásticas funciones!»"
        />
      </div>
    </div>
  );
};

export default Property1CardsTestimonials;