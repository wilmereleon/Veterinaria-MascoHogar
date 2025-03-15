import { FunctionComponent } from "react";
import Header from "../components/Header";
import Frame from "../components/Frame";
import Frame1 from "../components/Frame1";
import Footer from "../components/Footer";
import styles from "./MushoDCSHAEscaletaManageme.module.css";

const MushoDCSHAEscaletaManageme: FunctionComponent = () => {
  return (
    <div className={styles.mushoDcshaEscaletaManageme}>
      <Header />
      <main className={styles.frame}>
        <div className={styles.sidebar}>
          <div className={styles.navigation}>
            <div className={styles.link}>
              <div className={styles.houseIcon}>
                <div className={styles.whiteSpace}> </div>
                <img className={styles.frameIcon} alt="" src="/frame-8.svg" />
              </div>
              <div className={styles.text}>
                <a className={styles.inicio}>Inicio</a>
              </div>
            </div>
            <div className={styles.link1}>
              <div className={styles.houseIcon}>
                <div className={styles.whiteSpace}> </div>
                <img className={styles.frameIcon} alt="" src="/frame-9.svg" />
              </div>
              <div className={styles.text1}>
                <a className={styles.historial}>Historial</a>
              </div>
            </div>
            <div className={styles.link2}>
              <div className={styles.houseIcon}>
                <div className={styles.whiteSpace}> </div>
                <img className={styles.frameIcon} alt="" src="/frame-10.svg" />
              </div>
              <div className={styles.text2}>
                <a className={styles.plantillas}>Plantillas</a>
              </div>
            </div>
            <div className={styles.link3}>
              <div className={styles.houseIcon}>
                <div className={styles.whiteSpace}> </div>
                <img className={styles.frameIcon} alt="" src="/frame-11.svg" />
              </div>
              <div className={styles.text3}>
                <div className={styles.mdulos}>Módulos</div>
              </div>
            </div>
          </div>
          <div className={styles.margin}>
            <div className={styles.frame1}>
              <div className={styles.text4}>
                <div className={styles.herramientas}>Herramientas</div>
              </div>
              <div className={styles.link4}>
                <div className={styles.houseIcon}>
                  <div className={styles.whiteSpace}> </div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-12.svg"
                  />
                </div>
                <div className={styles.text5}>
                  <div className={styles.calendario}>Calendario</div>
                </div>
              </div>
              <div className={styles.link5}>
                <div className={styles.houseIcon}>
                  <div className={styles.whiteSpace}> </div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame-13.svg"
                  />
                </div>
                <div className={styles.text6}>
                  <div className={styles.equipo}>Equipo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.content}>
          <Frame />
          <div className={styles.frame2}>
            <div className={styles.heading}>
              <h3 className={styles.gestinDeTiempo}>Gestión de Tiempo</h3>
            </div>
            <div className={styles.grid}>
              <div className={styles.text7}>
                <div className={styles.bloque}>Bloque</div>
              </div>
              <div className={styles.text7}>
                <div className={styles.bloque}>Duración Estimada</div>
              </div>
              <div className={styles.text7}>
                <div className={styles.bloque}>Duración Real</div>
              </div>
              <div className={styles.text10}>
                <div className={styles.div}>Inicio</div>
              </div>
              <div className={styles.input}>
                <div className={styles.div}>00:00</div>
              </div>
              <div className={styles.input}>
                <div className={styles.div}>00:00</div>
              </div>
              <div className={styles.text10}>
                <div className={styles.div}>Desarrollo</div>
              </div>
              <div className={styles.input}>
                <div className={styles.div}>00:00</div>
              </div>
              <div className={styles.input}>
                <div className={styles.div}>00:00</div>
              </div>
              <div className={styles.text10}>
                <div className={styles.div}>Cierre</div>
              </div>
              <div className={styles.input}>
                <div className={styles.div}>00:00</div>
              </div>
              <div className={styles.input}>
                <div className={styles.div}>00:00</div>
              </div>
              <div className={styles.text13}>
                <b className={styles.total}>Total</b>
              </div>
              <div className={styles.text13}>
                <b className={styles.total}>00:00</b>
              </div>
              <div className={styles.text13}>
                <b className={styles.total}>00:00</b>
              </div>
            </div>
          </div>
          <Frame1 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MushoDCSHAEscaletaManageme;
