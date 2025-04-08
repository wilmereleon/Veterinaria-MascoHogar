import { FunctionComponent } from "react";
import styles from "./Testimonial.module.css";

/**
 * Tipo de las props para el componente `Testimonial`.
 */
export type TestimonialType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;

  /** URL de la imagen del avatar del autor del testimonio. */
  imageLummiCategoryavatars?: string;

  /** Nombre del autor del testimonio. */
  name1?: string;

  /** Texto breve del testimonio. */
  shortTestimonial?: string;
};

/**
 * Componente `Testimonial`.
 *
 * Este componente representa un testimonio con un avatar, el nombre del autor y un texto breve.
 * Es ideal para mostrar comentarios o reseñas de usuarios.
 *
 * @component
 * @param {TestimonialType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @param {string} [props.imageLummiCategoryavatars] - URL de la imagen del avatar del autor del testimonio.
 * @param {string} [props.name1] - Nombre del autor del testimonio.
 * @param {string} [props.shortTestimonial] - Texto breve del testimonio.
 * @returns {JSX.Element} El componente `Testimonial`.
 */
const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
  imageLummiCategoryavatars,
  name1,
  shortTestimonial,
}) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <img
        className={styles.imageLummiCategoryavata}
        alt="Avatar del autor del testimonio"
        src={imageLummiCategoryavatars}
      />
      <div className={styles.name}>{name1}</div>
      <div className={styles.shortTestimonial}>{shortTestimonial}</div>
    </div>
  );
};

export default Testimonial;