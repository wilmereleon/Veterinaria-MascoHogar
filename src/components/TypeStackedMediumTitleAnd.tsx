import { FunctionComponent } from "react";
import styles from "./TypeStackedMediumTitleAnd.module.css";

export type TypeStackedMediumTitleAndType = {
  className?: string;
};

const TypeStackedMediumTitleAnd: FunctionComponent<
  TypeStackedMediumTitleAndType
> = ({ className = "" }) => {
  return (
    <section
      className={[styles.typestackedMediumTitleAnd, className].join(" ")}
    >
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.figmaIpsumComponent}>
            Welcome to our platform designed for pet lovers.
          </h1>
          <h3 className={styles.figmaIpsumComponent1}>
            Manage your pets and appointments with ease and efficiency.
          </h3>
          <div className={styles.buttonCombo}>
            <div className={styles.ctaButton}>
              <div className={styles.textContainer1}>
                <div className={styles.cta}>Get Started Today</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <img
            className={styles.imageLummiIcon}
            alt=""
            src="/image-lummi@2x.png"
          />
          <div className={styles.overlay}>
            <img
              className={styles.playIcon}
              loading="lazy"
              alt=""
              src="/play-icon.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypeStackedMediumTitleAnd;
