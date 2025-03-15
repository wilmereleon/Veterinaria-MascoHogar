import { FunctionComponent } from "react";
import styles from "./Property1SoftwareHeroTripl.module.css";

export type Property1SoftwareHeroTriplType = {
  className?: string;
};

const Property1SoftwareHeroTripl: FunctionComponent<
  Property1SoftwareHeroTriplType
> = ({ className = "" }) => {
  return (
    <section
      className={[styles.property1softwareHeroTripl, className].join(" ")}
    >
      <div className={styles.wrapper}>
        <div className={styles.copyContainer}>
          <div className={styles.copyComponent}>
            <div className={styles.headingText}>
              <h1 className={styles.heading}>Stay Updated with Our News</h1>
              <h3 className={styles.subheading}>
                Subscribe to receive the latest updates and tips.
              </h3>
            </div>
            <div className={styles.buttonCombo}>
              <div className={styles.ctaButton}>
                <div className={styles.textContainer}>
                  <div className={styles.cta}>Learn More</div>
                </div>
              </div>
              <div className={styles.secondaryButton}>
                <div className={styles.textContainer1}>
                  <div className={styles.cta}>Get More Info</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mediaLayouts}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <img className={styles.deviceIcon} alt="" src="/device@2x.png" />
            <div className={styles.deviceWrapper}>
              <div className={styles.device}>
                <img
                  className={styles.iphone14Starlight1}
                  alt=""
                  src="/iphone-14--starlight-1@2x.png"
                />
                <img
                  className={styles.screenContentImageLummi}
                  alt=""
                  src="/screen-content-image--lummi@2x.png"
                />
              </div>
            </div>
            <img
              className={styles.deviceIcon1}
              loading="lazy"
              alt=""
              src="/device-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property1SoftwareHeroTripl;
