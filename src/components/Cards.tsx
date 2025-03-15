import { FunctionComponent } from "react";
import styles from "./Cards.module.css";

export type CardsType = {
  className?: string;
  imageLummi?: string;
  featureTitle?: string;
  featureDescription?: string;
};

const Cards: FunctionComponent<CardsType> = ({
  className = "",
  imageLummi,
  featureTitle,
  featureDescription,
}) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <img className={styles.imageLummi} alt="" src={imageLummi} />
      <div className={styles.copy}>
        <div className={styles.featureTitle}>{featureTitle}</div>
        <div className={styles.featureDescription}>{featureDescription}</div>
      </div>
    </div>
  );
};

export default Cards;