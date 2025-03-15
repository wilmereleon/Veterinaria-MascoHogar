import { FunctionComponent } from "react";
import TypeFloatingHeaderWithNavi from "../components/TypeFloatingHeaderWithNavi";
import TypeStackedMediumTitleAnd from "../components/TypeStackedMediumTitleAnd";
import TypeSideBySideImages from "../components/TypeSideBySideImages";
import Property1CardsTestimonials from "../components/Property1CardsTestimonials";
import TypeImageGridTitleDescri from "../components/TypeImageGridTitleDescri";
import Property1SoftwareHeroTripl from "../components/Property1SoftwareHeroTripl";
import TypeSubscribePillInputCT from "../components/TypeSubscribePillInputCT";
import styles from "./VeterinariaMascoHogar.module.css";

const VeterinariaMascoHogar: FunctionComponent = () => {
  return (
    <div className={styles.veterinariaMascohogar}>
      <TypeFloatingHeaderWithNavi />
      <TypeStackedMediumTitleAnd />
      <TypeSideBySideImages />
      <Property1CardsTestimonials />
      <TypeImageGridTitleDescri />
      <Property1SoftwareHeroTripl />
      <TypeSubscribePillInputCT />
      <section className={styles.typestackedSimpleFooter}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <div className={styles.brandname}>PetCare Team</div>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>About Us</div>
            <div className={styles.link}>Our Work</div>
            <div className={styles.link}>LinkedIn</div>
            <div className={styles.link}>Contact Us</div>
          </div>
        </div>
        <footer className={styles.credits}>
          <div className={styles.divider} />
          <div className={styles.row}>
            <div className={styles.brandNameAll}>
              © 2024 PetCare Hub. All rights reserved.
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.brandNameAll}>Privacy Policy</div>
              <div className={styles.brandNameAll}>Terms of Service</div>
              <div className={styles.brandNameAll}>Cookies Settings</div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default VeterinariaMascoHogar;
