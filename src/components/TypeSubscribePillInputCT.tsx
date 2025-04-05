import { FunctionComponent } from "react";
import styles from "./TypeSubscribePillInputCT.module.css";

/**
 * Tipo de las props para el componente `TypeSubscribePillInputCT`.
 */
export type TypeSubscribePillInputCTType = {
  /** Clase CSS adicional para personalizar el estilo del componente. */
  className?: string;
};

/**
 * Componente `TypeSubscribePillInputCT`.
 *
 * Este componente representa un formulario de suscripción con un diseño moderno.
 * Incluye un campo de entrada para el correo electrónico y un botón de llamada a la acción.
 *
 * @component
 * @param {TypeSubscribePillInputCTType} props - Props del componente.
 * @param {string} [props.className] - Clase CSS adicional para personalizar el estilo.
 * @returns {JSX.Element} El componente `TypeSubscribePillInputCT`.
 */
const TypeSubscribePillInputCT: FunctionComponent<TypeSubscribePillInputCTType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.typesubscribePillInputCt, className].join(" ")}>
      <div className={styles.container}>
        {/* Contenido principal del formulario */}
        <div className={styles.copyComponent}>
          {/* Encabezado del formulario */}
          <div className={styles.headingText}>
            <b className={styles.heading}>¡Suscríbete a nuestro boletín hoy!</b>
            <div className={styles.subheading}>
              Manténgase informado con nuestras últimas novedades y ofertas.
            </div>
          </div>

          {/* Campo de entrada y botón */}
          <div className={styles.inputButtonCombo}>
            {/* Campo de entrada */}
            <div className={styles.input}>
              <div className={styles.inputForm}>
                <div className={styles.textContainer}>
                  <div className={styles.placeholderText}>
                    Introduce tu dirección de correo electrónico
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de suscripción */}
            <div className={styles.button}>
              <div className={styles.textContainer1}>
                <div className={styles.cta}>Subscríbete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeSubscribePillInputCT;