import { FunctionComponent } from "react";
import styles from "./Cards.module.css";

const Cards: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <img
        className={styles.imageLummi}
        loading="lazy"
        alt=""
        src="/image--lummi@2x.png"
      />
      <div className={styles.copy}>
        <div className={styles.featureTitle}>User-Friendly Interface</div>
        <div className={styles.featureDescription}>
          Navigate effortlessly through our intuitive design.
        </div>
      </div>
    </div>
  );
};

export default Cards;