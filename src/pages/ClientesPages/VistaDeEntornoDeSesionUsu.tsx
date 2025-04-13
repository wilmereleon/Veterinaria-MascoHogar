import { FunctionComponent, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap
import styles from "./VistaDeEntornoDeSesionUsu.module.css";
import TypeFloatingHeaderWithNavi from "../../components/TypeFloatingHeaderWithNavi"; // Importa el navbar

// Importa íconos de React Icons
import { FaCalendarAlt, FaStethoscope, FaFileMedicalAlt } from "react-icons/fa";
import { MdLocalPharmacy, MdOutlineAssignment, MdReport } from "react-icons/md";
import { IoChatbubblesSharp, IoNotificationsSharp } from "react-icons/io5";

const VistaDeEntornoDeSesinUsu: FunctionComponent = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "Usuario";
    setUsername(storedUsername);
  }, []);

  return (
    <div
      className={`container-fluid ${styles.vistaDeEntornoDeSesinUsu}`}
      style={{ marginTop: "0", paddingTop: "0" }} // Elimina cualquier margen o padding superior
    >
      {/* Navbar */}
      <TypeFloatingHeaderWithNavi />

      {/* Contenedor principal */}
      <div className="row mt-0"> {/* Ajuste del margen superior */}
        {/* Contenedor de Bienvenida */}
        <div className="col-lg-7 mb-3"> {/* Reducido el margen inferior */}
          <div
            className={`${styles.bienvenidaContainer}`}
            style={{
              borderRadius: "0", // Quitar bordes redondeados
            }}
          >
            <h1 className={styles.bienvenido}>Bienvenido</h1>
            <h2 className={styles.holaWlmer}>Hola, {username}</h2>
            <p className={styles.realizaFcilmenteTus}>
              Realiza fácilmente tus diligencias con <b>MascoHogar</b>. <br />
              ¡Conoce aquí las soluciones virtuales que tenemos <br />
              especialmente para ti y tu animal de compañía!
            </p>
            <img
              className={`${styles.fotoDePerroYGato} mt-3`}
              src="/foto-de-perro-y-gato@2x.png"
              alt="Perro y gato"
            />
          </div>
        </div>

        {/* Contenedores de Servicios y Farmacia */}
        <div className="col-lg-5 d-flex flex-column gap-1"> {/* Reducido el espacio entre contenedores */}
          {/* Servicios */}
          <div
            className={`${styles.serviciosContainer}`}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "0", // Quitar bordes redondeados
            }}
          >
            <h4 className={`${styles.cardHeader}`}>Servicios</h4>
            <div className="card-body">
              <ul
                className="list-group"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  <li
                    className="list-group-item w-100"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                      padding: "0",
                    }}
                  >
                    <button
                      className={`${styles.transparentButton} w-100`}
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #65A30D",
                        borderRadius: "0", // Quitar bordes redondeados
                        color: "#65A30D",
                        padding: "10px 15px",
                        height: "60px", // Tamaño uniforme
                        textAlign: "center",
                      }}
                    >
                      <FaCalendarAlt
                        className="me-2"
                        size={24}
                        style={{ color: "#65A30D" }}
                      />
                      Solicitud y cancelación de citas
                    </button>
                  </li>
                  <li
                    className="list-group-item w-100"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                      padding: "0",
                    }}
                  >
                    <button
                      className={`${styles.transparentButton} w-100`}
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #65A30D",
                        borderRadius: "0", // Quitar bordes redondeados
                        color: "#65A30D",
                        padding: "10px 15px",
                        height: "60px", // Tamaño uniforme
                        textAlign: "center",
                      }}
                    >
                      <FaStethoscope
                        className="me-2"
                        size={24}
                        style={{ color: "#65A30D" }}
                      />
                      Solicitud y ayudas diagnósticas
                    </button>
                  </li>
                </div>
                <li
                  className="list-group-item w-100"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                  }}
                >
                  <button
                    className={`${styles.transparentButton} w-100`}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #65A30D",
                      borderRadius: "0", // Quitar bordes redondeados
                      color: "#65A30D",
                      padding: "10px 15px",
                      height: "60px", // Tamaño uniforme
                      textAlign: "center",
                    }}
                  >
                    <FaFileMedicalAlt
                      className="me-2"
                      size={24}
                      style={{ color: "#65A30D" }}
                    />
                    Historia clínica
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Farmacia y autorizaciones */}
          <div
            className={`${styles.farmaciaContainer}`}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "0", // Quitar bordes redondeados
            }}
          >
            <h4 className={`${styles.cardHeader}`}>Farmacia y autorizaciones</h4>
            <div className="card-body">
              <ul
                className="list-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0",
                }}
              >
                <li
                  className="list-group-item w-100"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                  }}
                >
                  <button
                    className={`${styles.transparentButton} w-100`}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #65A30D",
                      borderRadius: "0", // Quitar bordes redondeados
                      color: "#65A30D",
                      padding: "10px 15px",
                      height: "60px", // Tamaño uniforme
                      textAlign: "center",
                    }}
                  >
                    <MdLocalPharmacy
                      className="me-2"
                      size={24}
                      style={{ color: "#65A30D" }}
                    />
                    Medicamentos
                  </button>
                </li>
                <li
                  className="list-group-item w-100"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                  }}
                >
                  <button
                    className={`${styles.transparentButton} w-100`}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #65A30D",
                      borderRadius: "0", // Quitar bordes redondeados
                      color: "#65A30D",
                      padding: "10px 15px",
                      height: "60px", // Tamaño uniforme
                      textAlign: "center",
                    }}
                  >
                    <MdOutlineAssignment
                      className="me-2"
                      size={24}
                      style={{ color: "#65A30D" }}
                    />
                    Autorizaciones
                  </button>
                </li>
                <li
                  className="list-group-item w-100"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "0",
                  }}
                >
                  <button
                    className={`${styles.transparentButton} w-100`}
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #65A30D",
                      borderRadius: "0", // Quitar bordes redondeados
                      color: "#65A30D",
                      padding: "10px 15px",
                      height: "60px", // Tamaño uniforme
                      textAlign: "center",
                    }}
                  >
                    <MdReport
                      className="me-2"
                      size={24}
                      style={{ color: "#65A30D" }}
                    />
                    Reportes
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor de Opciones adicionales */}
      <div className="row mt-2">
        <div className="col-12 text-center">
          <div
            className={`${styles.opcionesAdicionalesContainer}`}
            style={{
              borderRadius: "0", // Quitar bordes redondeados
            }}
          >
            <h3
              className="mb-2"
              style={{
                color: "#059669",
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
                fontSize: "22px",
              }}
            >
              Opciones adicionales
            </h3>
            <div
              className="d-flex justify-content-center gap-3 flex-md-row flex-column"
              style={{
                gap: "157px", // Distancia entre los botones en PC
              }}
            >
              <button
                className="btn btn-success d-flex align-items-center"
                style={{
                  backgroundColor: "#65A30D",
                  borderColor: "#65A30D",
                  padding: "10px 15px", // Botones más angostos
                  width: "auto", // Ajuste automático en PC
                }}
              >
                <IoChatbubblesSharp className="me-2" size={24} />
                Contactar
              </button>
              <button
                className="btn btn-success d-flex align-items-center"
                style={{
                  backgroundColor: "#65A30D",
                  borderColor: "#65A30D",
                  padding: "10px 15px", // Botones más angostos
                  width: "auto", // Ajuste automático en PC
                }}
              >
                <IoNotificationsSharp className="me-2" size={24} />
                Notificaciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaDeEntornoDeSesinUsu;