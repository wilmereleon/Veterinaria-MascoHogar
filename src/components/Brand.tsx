import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Brand.module.css";

export type BrandType = {
  className?: string;
  icon?: string;

  /** Style props */
  brandPosition?: CSSProperties["position"];
  brandTop?: CSSProperties["top"];
  brandLeft?: CSSProperties["left"];
  brandBackgroundColor?: CSSProperties["backgroundColor"];
};

const Brand: FunctionComponent<BrandType> = ({
  className = "",
  brandPosition,
  brandTop,
  brandLeft,
  icon,
  brandBackgroundColor,
}) => {
  const brandStyle: CSSProperties = useMemo(() => {
    return {
      position: brandPosition,
      top: brandTop,
      left: brandLeft,
      backgroundColor: brandBackgroundColor,
    };
  }, [brandPosition, brandTop, brandLeft, brandBackgroundColor]);

  return (
    <div className={[styles.brand, className].join(" ")} style={brandStyle}>
      <img className={styles.icon} alt="" src={icon} />
      <img className={styles.icon1} alt="" src="/icon1.png" />
      <b className={styles.brandname}>
        <span className={styles.brandnameTxt}>
          <span>Veterinaria</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.mascohogar}>MascoHogar</span>
        </span>
      </b>
    </div>
  );
};

export default Brand;
