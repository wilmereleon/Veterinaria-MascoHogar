import { FunctionComponent, useEffect, useState } from "react";
import BottomFooter from "../../components/BottomFooter";
import ContenedorFarmaciaYAutoriza from "../../components/ContenedorFarmaciaYAutoriza";
import ContenedorServicios from "../../components/ContenedorServicios";
import HeaderTop from "../../components/HeaderTop";
import styles from "./VistaDeEntornoDeSesionUsu.module.css";

const VistaDeEntornoDeSesinUsu: FunctionComponent = () => {
  const [username, setUsername] = useState<string>(""); // Estado para almacenar el nombre del usuario

  // Obtener el nombre del usuario desde localStorage al cargar el componente
  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "Usuario"; // Valor predeterminado si no hay usuario
    setUsername(storedUsername);
  }, []);

  return (
    <div className={styles.vistaDeEntornoDeSesinUsu}>
      <BottomFooter />
      <div className={styles.contenedorServiciosFarmacia}>
        <ContenedorFarmaciaYAutoriza />
        <ContenedorServicios />
      </div>
      <div className={styles.entornoDeBienvenidaParent}>
        <div className={styles.entornoDeBienvenida} />
        {/* Mostrar el nombre del usuario autenticado */}
        <div className={styles.holaWlmer}>Hola, {username}</div>
        <div className={styles.bienvenido}>Bienvenido</div>
        <div className={styles.realizaFcilmenteTusContainer}>
          <span className={styles.realizaFcilmenteTusContainer1}>
            <p className={styles.realizaFcilmenteTusDiligen}>
              <span
                className={styles.realizaFcilmenteTus}
              >{`Realiza fácilmente tus diligencias con `}</span>
              <b className={styles.realizaFcilmenteTus}>MascoHogar</b>
              <span>.</span>
            </p>
            <p className={styles.realizaFcilmenteTusDiligen}>
              ¡Conoce aquí las soluciones virtuales que tenemos especialmente
              para ti y tu animal de compañía!
            </p>
          </span>
        </div>
        <img
          className={styles.fotoDePerroYGato}
          alt=""
          src="/foto-de-perro-y-gato@2x.png"
        />
      </div>
      <HeaderTop />
    </div>
  );
};

export default VistaDeEntornoDeSesinUsu;