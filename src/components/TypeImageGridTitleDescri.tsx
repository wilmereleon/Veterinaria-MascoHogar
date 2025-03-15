import { FunctionComponent } from "react";
import styles from "./TypeImageGridTitleDescri.module.css";

export type TypeImageGridTitleDescriType = {
  className?: string;
};

const TypeImageGridTitleDescri: FunctionComponent<
  TypeImageGridTitleDescriType
> = ({ className = "" }) => {
  return (
    <div className={[styles.typeimageGridTitleDescri, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.bio}>
            <div className={styles.thisIsA}>
              Join Our Community of Pet Lovers
            </div>
            <div className={styles.aMediumLength}>
              Discover a platform that connects you with your pet's needs.
            </div>
          </div>
          <div className={styles.ctaButton}>
            <div className={styles.textContainer1}>
              <div className={styles.cta}>Sign Up Now</div>
            </div>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt=""
              src="/image-lummi-1@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt=""
              src="/image-lummi-2@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt=""
              src="/image-lummi-3@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt=""
              src="/image-lummi-4@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt=""
              src="/image-lummi-5@2x.png"
            />
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageLummiIcon}
              alt=""
              src="/image-lummi-6@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeImageGridTitleDescri;