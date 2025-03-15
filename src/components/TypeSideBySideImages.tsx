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
    <section className={[styles.typesideBySideImages, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Manage Your Pets</h1>
          <h3 className={styles.subheading}>
            Easily register and track your pet's health.
          </h3>
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
    </section>
  );
};

export default TypeSideBySideImages;
