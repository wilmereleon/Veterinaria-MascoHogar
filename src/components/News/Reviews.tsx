import { FunctionComponent, useCallback, useState, useEffect } from "react";
import Row from "./Row";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Reviews.module.css";

/**
 * Tipo de las props para el componente `Reviews`.
 */
export type ReviewsType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `Reviews`.
 *
 * Este componente permite a los usuarios ver comentarios existentes y agregar nuevos comentarios.
 * Si el usuario no está autenticado, será redirigido a la página de inicio de sesión antes de poder comentar.
 *
 * @component
 * @param {ReviewsType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `Reviews`.
 */
const Reviews: FunctionComponent<ReviewsType> = ({ className = "" }) => {
  /**
   * Hook para navegar entre rutas.
   * @type {Function}
   */
  const navigate = useNavigate();

  /**
   * Hook para obtener la ubicación actual.
   * @type {Object}
   */
  const location = useLocation();

  /**
   * Estado para manejar el texto ingresado en el campo de comentarios.
   * @type {string}
   */
  const [comment, setComment] = useState("");

  /**
   * Estado para verificar si el usuario está autenticado.
   * @type {boolean}
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Estado para almacenar el nombre del usuario autenticado.
   * @type {string}
   */
  const [username, setUsername] = useState("Usuario");

  /**
   * Lista de comentarios ingresados por los usuarios.
   * @type {Array<{ user: string, text: string }>}
   */
  const [commentsList, setCommentsList] = useState<{ user: string; text: string }[]>([]);

  /**
   * Efecto para verificar si el usuario está autenticado al cargar el componente.
   * También obtiene el nombre del usuario desde `localStorage`.
   */
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    const storedUsername = localStorage.getItem("username") || "Usuario";
    setUsername(storedUsername);
  }, []);

  /**
   * Maneja el cambio de texto en el campo de comentarios.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - Evento de cambio del campo de texto.
   */
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  /**
   * Maneja el envío del comentario.
   * Si el usuario no está autenticado, lo redirige a la página de inicio de sesión.
   * Si el campo de comentarios está vacío, muestra una alerta.
   * Si todo es válido, agrega el comentario a la lista y limpia el campo de texto.
   */
  const handleCommentSubmit = useCallback(() => {
    if (!isAuthenticated) {
      // Redirigir al inicio de sesión y guardar la ruta actual
      navigate("/login", { state: { from: location.pathname } });
    } else if (comment.trim() === "") {
      alert("Por favor, escribe un comentario antes de enviarlo.");
    } else {
      setCommentsList((prevComments) => [...prevComments, { user: username, text: comment }]);
      setComment("");
    }
  }, [isAuthenticated, comment, username, navigate, location.pathname]);

  return (
    <div className={[styles.reviews, className].join(" ")}>
      <div className={styles.list}>
        {/* Comentarios existentes */}
        <Row
          rowBorder="unset"
          cardBorder="1px solid #65a30d"
          avatar="/avatar1@2x.png"
          title="Suzana Vega"
          title1={`¡Gran artículo! A mi gato le está yendo\nbien.`}
          className={styles.smallContainer} // Aplica la clase para achicar el contenedor
        />
        <Row
          rowBorder="unset"
          cardBorder="1px solid #65a30d"
          avatar="/avatar2@2x.png"
          title="Ana Patricia López"
          title1={`Gracias por las recomendaciones.\n`}
          className={styles.smallContainer} // Aplica la clase para achicar el contenedor
        />
        {/* Comentarios dinámicos */}
        {commentsList.map((commentItem, index) => (
          <Row
            key={index}
            avatar="/avatar3@2x.png"
            title={commentItem.user}
            title1={commentItem.text} // Pasar el texto directamente como string
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
                  <div className={styles.title}>{username}</div>
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
              onChange={handleCommentChange}
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