import { FunctionComponent } from "react";
import styles from "./Testimonial.module.css";

export type TestimonialType = {
  className?: string;
  imageLummiCategoryavatars?: string;
  name1?: string;
  shortTestimonial?: string;
};

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
        loading="lazy"
        alt=""
        src={imageLummiCategoryavatars}
      />
      <div className={styles.name}>{name1}</div>
      <h3 className={styles.shortTestimonial}>{shortTestimonial}</h3>
    </div>
  );
};

export default Testimonial;
