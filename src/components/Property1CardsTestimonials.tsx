import { FunctionComponent } from "react";
import Testimonial from "./Testimonial";
import styles from "./Property1CardsTestimonials.module.css";

export type Property1CardsTestimonialsType = {
  className?: string;
};

const Property1CardsTestimonials: FunctionComponent<
  Property1CardsTestimonialsType
> = ({ className = "" }) => {
  return (
    <div className={[styles.property1cardsTestimonials, className].join(" ")}>
      <div className={styles.heading}>Qué dicen nuestros clientes</div>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonial}>
          <img
            className={styles.imageLummiCategoryavata}
            alt=""
            src="/image-lummi-categoryavatars@2x.png"
          />
          <div className={styles.name}>María López, dueña de mascota</div>
          <div className={styles.shortTestimonial}>
            «¡Esta plataforma ha transformado la forma en que gestiono a mis
            mascotas!»
          </div>
        </div>
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