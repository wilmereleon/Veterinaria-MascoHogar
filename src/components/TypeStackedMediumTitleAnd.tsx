import { FunctionComponent } from "react";
import styles from "./TypeStackedMediumTitleAnd.module.css";

export type TypeStackedMediumTitleAndType = {
  className?: string;
};

const TypeStackedMediumTitleAnd: FunctionComponent<
  TypeStackedMediumTitleAndType
> = ({ className = "" }) => {
  return (
    <div className={[styles.typestackedMediumTitleAnd, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.figmaIpsumComponent}>
            Welcome to our platform designed for pet lovers.
          </div>
          <div className={styles.figmaIpsumComponent1}>
            Manage your pets and appointments with ease and efficiency.
          </div>
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
            <img className={styles.playIcon} alt="" src="/play-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeStackedMediumTitleAnd;