import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Row.module.css";

export type RowType = {
  className?: string;
  avatar?: string;
  title?: string;
  title1?: string;

  /** Style props */
  rowBorder?: CSSProperties["border"];
  cardBorder?: CSSProperties["border"];
};

const Row: FunctionComponent<RowType> = ({
  className = "",
  rowBorder,
  cardBorder,
  avatar,
  title,
  title1,
}) => {
  const rowStyle: CSSProperties = useMemo(() => {
    return {
      border: rowBorder,
    };
  }, [rowBorder]);

  const cardStyle: CSSProperties = useMemo(() => {
    return {
      border: cardBorder,
    };
  }, [cardBorder]);

  return (
    <div className={[styles.row, className].join(" ")} style={rowStyle}>
      <div className={styles.card} style={cardStyle}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img className={styles.avatarIcon} alt="" src={avatar} />
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{title}</div>
            </div>
          </div>
          <img className={styles.userChild} alt="" src="/frame-427318817.svg" />
        </div>
        <div className={styles.title1}>{title1}</div>
      </div>
    </div>
  );
};

export default Row;
