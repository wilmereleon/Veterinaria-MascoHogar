import { FunctionComponent } from "react";
import Cards from "./Cards";
import styles from "./TypeSideBySideImages.module.css";

export type TypeSideBySideImagesType = {
  className?: string;
};

const TypeSideBySideImages: FunctionComponent<TypeSideBySideImagesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.typesideBySideImages, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <div className={styles.heading}>
            Administra los servicios requeridos por tu animal de compañía
          </div>
          <div className={styles.subheading}>
            Registre y realice un seguimiento fácil de su salud.
          </div>
        </div>
        <div className={styles.featureGrid}>
          <Cards
            imageLummi="/image--lummi@2x.png"
            featureTitle="User-Friendly Interface"
            featureDescription="Navigate effortlessly through our intuitive design."
          />
          <Cards
            imageLummi="/image--lummi-1@2x.png"
            featureTitle="Secure User Profiles"
            featureDescription="Protect your data with our secure login system."
          />
        </div>
      </div>
    </div>
  );
};

export default TypeSideBySideImages;