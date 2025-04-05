import { FunctionComponent, useCallback, useState, useEffect } from "react";
import Row from "./Row";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Reviews.module.css";

export type ReviewsType = {
  className?: string;
};

const Reviews: FunctionComponent<ReviewsType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [comment, setComment] = useState(""); // Estado para manejar el texto ingresado
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar si el usuario está autenticado
  const [username, setUsername] = useState("Usuario"); // Estado para almacenar el nombre del usuario autenticado
  const [commentsList, setCommentsList] = useState<{ user: string; text: string }[]>([]); // Lista de comentarios

  // Verificar si el usuario está autenticado al cargar el componente
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    // Obtener el nombre del usuario autenticado desde localStorage
    const storedUsername = localStorage.getItem("username") || "Usuario";
    setUsername(storedUsername); // Actualizar el estado con el nombre del usuario logueado
  }, []);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value); // Actualiza el estado con el texto ingresado
  };

  const handleCommentSubmit = useCallback(() => {
    if (!isAuthenticated) {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      navigate("/login", { state: { from: location.pathname } }); // Guarda la ruta previa
    } else if (comment.trim() === "") {
      // Validar si el campo de comentarios está vacío
      alert("Por favor, escribe un comentario antes de enviarlo.");
    } else {
      // Agregar el comentario a la lista
      setCommentsList((prevComments) => [...prevComments, { user: username, text: comment }]);
      setComment(""); // Limpia el campo de comentario después de enviarlo
    }
  }, [isAuthenticated, comment, username, navigate, location.pathname]);

  return (
    <div className={[styles.reviews, className].join(" ")}>
      <div className={styles.list}>
        {/* Comentarios existentes */}
        <Row
          avatar="/avatar1@2x.png"
          title="Suzana Vega"
          title1="¡Gran artículo! A mi gato le está yendo bien después de seguir estos métodos de desparasión."
        />
        <Row
          rowBorder="unset"
          cardBorder="1px solid #65a30d"
          avatar="/avatar2@2x.png"
          title="Ana Patricia López"
          title1="Gracias por las recomendaciones. Definitivamente los aplicará para mi gato interior."
        />
        {/* Comentarios dinámicos */}
        {commentsList.map((commentItem, index) => (
          <Row
            key={index}
            avatar="/avatar3@2x.png" // Puedes usar un avatar genérico o personalizado
            title={commentItem.user}
            title1={commentItem.text}
          />
        ))}
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
                  <div className={styles.title}>{username}</div> {/* Mostrar el nombre del usuario logueado */}
                </div>
              </div>
              <img
                className={styles.userChild}
                alt=""
                src="/frame-427318817.svg"
              />
            </div>
            {/* Campo de texto para el comentario */}
            <textarea
              className={styles.commentInput}
              placeholder="Ingresa tu comentario"
              value={comment}
              onChange={handleCommentChange} // Maneja el cambio de texto
            />
          </div>
        </div>
        {/* Botón para enviar el comentario */}
        <div className={styles.row1} onClick={handleCommentSubmit}>
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