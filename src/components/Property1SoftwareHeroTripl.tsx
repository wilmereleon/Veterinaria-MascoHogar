import { FunctionComponent } from "react";
import styles from "./Property1SoftwareHeroTripl.module.css";

export type Property1SoftwareHeroTriplType = {
  className?: string;
};

const Property1SoftwareHeroTripl: FunctionComponent<
  Property1SoftwareHeroTriplType
> = ({ className = "" }) => {
  return (
    <div className={[styles.property1softwareHeroTripl, className].join(" ")}>
      <div className={styles.wrapper}>
        <div className={styles.copyContainer}>
          <div className={styles.copyComponent}>
            <div className={styles.headingText}>
              <div className={styles.heading}>
                Manténgase actualizado con nuestras noticias
              </div>
              <div className={styles.subheading}>
                Suscríbete para recibir las últimas actualizaciones y consejos.
              </div>
            </div>
            <div className={styles.buttonCombo}>
              <div className={styles.ctaButton}>
                <div className={styles.textContainer}>
                  <div className={styles.cta}>Leer más</div>
                </div>
              </div>
              <div className={styles.secondaryButton}>
                <div className={styles.textContainer1}>
                  <div className={styles.cta}>Obtenga más información</div>
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
            <img className={styles.deviceIcon1} alt="" src="/device-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1SoftwareHeroTripl;