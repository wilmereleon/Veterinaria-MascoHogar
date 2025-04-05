import { FunctionComponent } from "react";
import styles from "./VistaDeEntornoDeSesionUsu.module.css";
import HeaderUserView from "../../components/VistaUsuario/HeaderUserView";
import ServiceCard from "./ServiceCard"; // Subcomponente separado

/**
 * Componente `VistaDeEntornoDeSesionUsu`.
 *
 * Este componente representa la vista principal del entorno de sesión del usuario.
 * Incluye un encabezado, una columna de bienvenida, una columna de servicios, y un pie de página con opciones adicionales.
 *
 * @component
 * @returns {JSX.Element} La vista principal del entorno de sesión del usuario.
 */
const VistaDeEntornoDeSesionUsu: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      {/* Navbar */}
      <HeaderUserView />

      {/* Contenido principal */}
      <div className={styles.mainContent}>
        {/* Columna izquierda - Bienvenida */}
        <div className={styles.welcomeColumn}>
          <div className={styles.welcomeCard}>
            <h1 className={styles.welcomeTitle}>Bienvenido</h1>
            <h2 className={styles.userGreeting}>Hola, Wilmer</h2>
            <p className={styles.welcomeText}>
              Realiza fácilmente tus diligencias con <strong>MascoHogar</strong>. <br />
              ¡Conoce aquí las soluciones virtuales que tenemos especialmente para ti 
              y tu animal de compañía!
            </p>
            <div className={styles.petsImage}>
              <img
                src="/foto-de-perro-y-gato@2x.png"
                alt="Imagen de un perro y un gato"
              />
            </div>
          </div>
        </div>

        {/* Columna derecha - Servicios */}
        <div className={styles.servicesColumn}>
          <div className={styles.servicesWrapper}>
            {/* Sección de Servicios */}
            <div className={styles.serviceSection}>
              <h3 className={styles.sectionTitle}>Servicios</h3>
              <div className={styles.serviceGrid}>
                <ServiceCard
                  icon="/medkit1.svg"
                  title="Solicitud y cancelación de citas"
                />
                <ServiceCard
                  icon="/medkit2.svg"
                  title="Solicitud y ayudas diagnósticas"
                />
                <ServiceCard icon="/medkit3.svg" title="Historia clínica" />
              </div>
            </div>

            {/* Sección de Farmacia */}
            <div className={styles.serviceSection}>
              <h3 className={styles.sectionTitle}>Farmacia y autorizaciones</h3>
              <div className={styles.serviceGrid}>
                <ServiceCard icon="/medkit.svg" title="Medicamentos" />
                <ServiceCard icon="/vector.svg" title="Autorizaciones" />
                <ServiceCard icon="/mailunread.svg" title="Reportes" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer con botones verdes */}
      <footer className={styles.footer}>
        <h3 className={styles.sectionTitle}>Opciones adicionales</h3>
        <div className={styles.footerOptions}>
          <button className={styles.footerButton}>
            <img
              src="/chatbubblessharp.svg"
              alt="Ícono de contacto"
              className={styles.serviceIcon}
            />
            <span>Contactar</span>
          </button>
          <button className={styles.footerButton}>
            <img
              src="/notificationssharp.svg"
              alt="Ícono de notificaciones"
              className={styles.serviceIcon}
            />
            <span>Notificaciones</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default VistaDeEntornoDeSesionUsu;