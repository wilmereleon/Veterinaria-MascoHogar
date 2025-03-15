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
      <div className={styles.heading}>What Our Clients Say</div>
      <div className={styles.testimonialsGrid}>
        <div className={styles.testimonial}>
          <img
            className={styles.imageLummiCategoryavata}
            alt=""
            src="/image-lummi-categoryavatars@2x.png"
          />
          <div className={styles.name}>Maria Lopez, Pet Owner</div>
          <div className={styles.shortTestimonial}>
            “This platform has transformed how I manage my pets!”
          </div>
        </div>
        <Testimonial
          imageLummiCategoryavatars="/image-lummi-categoryavatars-1@2x.png"
          name1="John Smith, Veterinarian"
          shortTestimonial="“A must-have tool for every pet owner!”"
        />
        <Testimonial
          imageLummiCategoryavatars="/image-lummi-categoryavatars-2@2x.png"
          name1="Emily Johnson, Happy Customer"
          shortTestimonial="“I love the ease of use and the great features!”"
        />
      </div>
    </div>
  );
};

export default Property1CardsTestimonials;