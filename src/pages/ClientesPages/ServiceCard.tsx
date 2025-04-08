import { FunctionComponent } from "react";
import styles from "./ServiceCard.module.css";

/**
 * Props para el componente `ServiceCard`.
 */
interface ServiceCardProps {
  /** Ruta del ícono que se mostrará en la tarjeta. */
  icon: string;

  /** Título del servicio que se mostrará en la tarjeta. */
  title: string;

  /** Indica si la tarjeta debe mostrarse en un tamaño reducido. */
  small?: boolean;
}

/**
 * Componente `ServiceCard`.
 *
 * Este componente representa una tarjeta de servicio que incluye un ícono y un título.
 *
 * @component
 * @param {ServiceCardProps} props - Props del componente.
 * @returns {JSX.Element} Una tarjeta de servicio.
 */
const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  icon,
  title,
  small = false,
}) => {
  return (
    <div className={`${styles.serviceCard} ${small ? styles.smallCard : ""}`}>
      <img
        src={icon}
        alt={`Ícono para ${title}`}
        className={styles.serviceIcon}
      />
      <span className={styles.serviceTitle}>{title}</span>
    </div>
  );
};

export default ServiceCard;