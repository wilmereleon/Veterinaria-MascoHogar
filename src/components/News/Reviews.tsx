import { FunctionComponent, useCallback, useState } from "react";
import Row from "./Row";
import { useNavigate } from "react-router-dom";
import styles from "./Reviews.module.css";

export type ReviewsType = {
  className?: string;
};

const Reviews: FunctionComponent<ReviewsType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState(""); // Estado para manejar el texto ingresado

  const onRowContainerClick = useCallback(() => {
    navigate("/vista-inicio-de-sesin");
  }, [navigate]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value); // Actualiza el estado con el texto ingresado
  };

  return (
    <div className={[styles.reviews, className].join(" ")}>
      <div className={styles.list}>
        <Row
          avatar="/avatar1@2x.png"
          title="Suzana Vega"
          title1="¡Gran artículo! A mi gato le está yendo bien después de seguir estos métodos de desparasión."
        />
        <Row
          rowBorder="unset"
          cardBorder="1px solid #65a30d"
          avatar="/avatar2@2x.png"
          title="Ana Patricia Lòpez"
          title1="Gracias por las recomendaciones. Definitivamente los aplicará para mi gato interior."
        />
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.user}>
              <div className={styles.avatar}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar3@2x.png"
                />
                <div className={styles.titleWrapper}>
                  <div className={styles.title}>User</div>
                </div>
              </div>
              <img
                className={styles.userChild}
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
            {/* Reemplaza el <i> con un <textarea> */}
            <textarea
              className={styles.commentInput}
              placeholder="Ingresa tu comentario"
              value={comment}
              onChange={handleCommentChange} // Maneja el cambio de texto
            />
          </div>
        </div>
        <div className={styles.row1} onClick={onRowContainerClick}>
          <div className={styles.button}>
            <div className={styles.textContainer}>
              <div className={styles.cta}>Comenta</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.reviewsChild} alt="" src="/vector-200.svg" />
    </div>
  );
};

export default Reviews;