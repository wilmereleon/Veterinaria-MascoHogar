import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Article.module.css";

/**
 * Tipo de las props para el componente `Article`.
 */
export type ArticleType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;

  /** Título principal del artículo. */
  title?: string;

  /** Subtítulo del artículo. */
  subtitle?: string;

  /** Propiedades de estilo flex para el contenedor principal del artículo. */
  articleFlex?: CSSProperties["flex"];

  /** Propiedad `align-self` para el contenedor principal del artículo. */
  articleAlignSelf?: CSSProperties["alignSelf"];

  /** Imagen de fondo para el contenedor de la imagen. */
  imageContainerBackgroundImage?: CSSProperties["backgroundImage"];
};

/**
 * Componente `Article`.
 *
 * Este componente representa un artículo con un contenedor de imagen, título, subtítulo,
 * etiquetas y un avatar de usuario. Es altamente personalizable mediante props de estilo.
 *
 * @component
 * @param {ArticleType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @param {string} [props.title] - Título principal del artículo.
 * @param {string} [props.subtitle] - Subtítulo del artículo.
 * @param {CSSProperties["flex"]} [props.articleFlex] - Propiedad `flex` para el contenedor principal.
 * @param {CSSProperties["alignSelf"]} [props.articleAlignSelf] - Propiedad `align-self` para el contenedor principal.
 * @param {CSSProperties["backgroundImage"]} [props.imageContainerBackgroundImage] - Imagen de fondo para el contenedor de la imagen.
 * @returns {JSX.Element} El componente `Article`.
 */
const Article: FunctionComponent<ArticleType> = ({
  className = "",
  articleFlex,
  articleAlignSelf,
  imageContainerBackgroundImage,
  title,
  subtitle,
}) => {
  /**
   * Estilo dinámico para el contenedor principal del artículo.
   * @type {CSSProperties}
   */
  const articleStyle: CSSProperties = useMemo(() => {
    return {
      flex: articleFlex,
      alignSelf: articleAlignSelf,
    };
  }, [articleFlex, articleAlignSelf]);

  /**
   * Estilo dinámico para el contenedor de la imagen.
   * @type {CSSProperties}
   */
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
      {/* Contenedor de la imagen con estilos dinámicos */}
      <div className={styles.imageContainer} style={imageContainerStyle}></div>

      {/* Contenedor del contenido del artículo */}
      <div className={styles.titleParent}>
        {/* Título principal */}
        <b className={styles.title}>{title}</b>

        {/* Subtítulo */}
        <div className={styles.subtitle}>{subtitle}</div>

        {/* Etiquetas */}
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

        {/* Información del usuario */}
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
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