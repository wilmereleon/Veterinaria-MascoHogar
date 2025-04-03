import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Article.module.css";

export type ArticleType = {
  className?: string;
  title?: string;
  subtitle?: string;

  /** Style props */
  articleFlex?: CSSProperties["flex"];
  articleAlignSelf?: CSSProperties["alignSelf"];
  imageContainerBackgroundImage?: CSSProperties["backgroundImage"];
};

const Article: FunctionComponent<ArticleType> = ({
  className = "",
  articleFlex,
  articleAlignSelf,
  imageContainerBackgroundImage,
  title,
  subtitle,
}) => {
  const articleStyle: CSSProperties = useMemo(() => {
    return {
      flex: articleFlex,
      alignSelf: articleAlignSelf,
    };
  }, [articleFlex, articleAlignSelf]);

  const imageContainerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: imageContainerBackgroundImage,
      backgroundSize: "cover", // Asegura que la imagen de fondo cubra el contenedor
      backgroundRepeat: "no-repeat", // Evita que la imagen se repita
      backgroundPosition: "center", // Centra la imagen de fondo
    };
  }, [imageContainerBackgroundImage]);

  return (
    <div className={[styles.article, className].join(" ")} style={articleStyle}>
      {/* Elimina el <img> redundante si estás usando backgroundImage */}
      <div className={styles.imageContainer} style={imageContainerStyle}></div>
      <div className={styles.titleParent}>
        <b className={styles.title}>{title}</b>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.selection}>
          <div className={styles.labelNormal}>
            <div className={styles.labelText}>Beneficios</div>
          </div>
          <div className={styles.labelNormal}>
            <div className={styles.labelText}>Métodos</div>
          </div>
          <div className={styles.labelNormal}>
            <div className={styles.labelText}>Frecuencia</div>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img className={styles.avatarIcon} alt="" src="/assets/avatar@2x.png" />
            <div className={styles.titleWrapper}>
              <div className={styles.title1}>Veterinarios expertos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;