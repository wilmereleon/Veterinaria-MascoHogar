import { FunctionComponent, useEffect, useState, useCallback } from "react";
import Medicamentos from "../../components/Medicamentos";
import HeaderTop from "../../components/HeaderTop";
import styles from "./VistaDeEntornoDeSesionUsu.module.css";

const VistaDeEntornoDeSesinUsu: FunctionComponent = () => {
  const [username, setUsername] = useState<string>(""); // Estado para almacenar el nombre del usuario

  // Obtener el nombre del usuario desde localStorage al cargar el componente
  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "Usuario"; // Valor predeterminado si no hay usuario
    setUsername(storedUsername);
  }, []);

  const onMedicamentosContainerClick = useCallback(() => {
    // Please sync "Vista de entorno de solicitud de citas usuario:cliente" to the project
  }, []);

  return (
    <div className={styles.vistaDeEntornoDeSesinUsu}>
      {/* Contenedor de Opciones Adicionales */}
      <div className={styles.opcionesAdicionales}>
        <div className={styles.opcionesAdicionalesChild} />
        <div className={styles.opcionesAdicionales1}>Opciones adicionales</div>
        <div className={styles.ctaButton}>
          <div className={styles.textContainer}>
            <img
              className={styles.chatbubblesSharpIcon}
              alt=""
              src="/chatbubblessharp.svg"
            />
            <div className={styles.cta}>Contactar</div>
          </div>
        </div>
        <div className={styles.ctaButton1}>
          <div className={styles.textContainer1}>
            <img
              className={styles.chatbubblesSharpIcon}
              alt=""
              src="/notificationssharp.svg"
            />
            <div className={styles.cta1}>Notificaciones</div>
          </div>
        </div>
      </div>

      <div className={styles.contenedorServiciosFarmacia}>
        {/* Contenedor de Farmacia y Autorizaciones */}
        <div className={styles.contenedorFarmaciaYAutoriza}>
          <div className={styles.contenedorFarmaciaYAutorizaChild} />
          <div className={styles.reportes}>
            <div className={styles.repoButton}>
              <div className={styles.textContainer}>
                <img
                  className={styles.mailUnreadIcon}
                  alt=""
                  src="/mailunread.svg"
                />
                <div className={styles.cta}>
                  <span>{` `}</span>
                  <span className={styles.reportes1}>{`Reportes  `}</span>
                  <span>{` `}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.autorizaciones}>
            <div className={styles.autoButton}>
              <div className={styles.textContainer1}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.cta}>Autorizaciones</div>
              </div>
            </div>
          </div>
          <div className={styles.medicamentos}>
            <div className={styles.medButton}>
              <div className={styles.textContainer1}>
                <img className={styles.medkitIcon} alt="" src="/medkit.svg" />
                <div className={styles.cta}>Medicamentos</div>
              </div>
            </div>
          </div>
          <div className={styles.ttuloDeFarmaciaYAutorizac}>
            <div className={styles.farmaciaYAutorizaciones}>
              Farmacia y autorizaciones
            </div>
          </div>
        </div>

        {/* Contenedor de Servicios */}
        <div className={styles.contenedorServicios}>
          <div className={styles.contenedorDeServicios} />
          <div className={styles.ttuloDeServicios}>
            <div className={styles.servicios}>Servicios</div>
          </div>
          <Medicamentos
            onMedicamentosContainerClick={onMedicamentosContainerClick}
            medkit="/medkit1.svg"
            cTA="Solicitud y cancelación de citas"
          />
          <Medicamentos
            medicamentosLeft="255px"
            medicamentosTop="72px"
            medicamentosHeight="100px"
            medkit="/medkit2.svg"
            cTA="Solicitud y ayudas diagnósticas"
            cTAWidth="144px"
          />
          <Medicamentos
            medicamentosLeft="145px"
            medicamentosTop="192px"
            medicamentosHeight="69px"
            medkit="/medkit3.svg"
            cTA="Historia clínica"
            cTAWidth="109px"
          />
        </div>
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