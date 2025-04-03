import { FunctionComponent } from "react";
import Article from "./Article";
import styles from "./Contents.module.css";

export type ContentsType = {
  className?: string;
};

const Contents: FunctionComponent<ContentsType> = ({ className = "" }) => {
  return (
    <div className={[styles.contents, className].join(" ")}>
      <div className={styles.container}>
        <b className={styles.title}>
          Desparasitación en gatos de casa: importancia y síntomas a vigilar
        </b>
        <div className={styles.laSaludDeContainer}>
          <p className={styles.laSaludDeNuestrosGatosEs}>
            <span>
              <span className={styles.laSaludDe}>
                La salud de nuestros gatos es una prioridad para cualquier dueño
                responsable, especialmente para aquellos que mantienen a sus
                felinos como animales de compañía en el hogar. La
                desparasitación es una práctica esencial para garantizar el
                bienestar integral de estos pequeños compañeros, ya que tanto
                parásitos internos como externos pueden afectar negativamente su
                calidad de vida.
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <b>&nbsp;</b>
            </span>
          </p>
          <p className={styles.porQuEsImportanteLaDespa}>
            <b>¿Por qué es importante la desparasitación?</b>
          </p>
          <p className={styles.losGatosIncluso}>
            Los gatos, incluso aquellos que viven exclusivamente en casa, pueden
            estar expuestos a parásitos de diversas maneras. Los parásitos
            internos, como lombrices intestinales, tenias y protozoos, pueden
            llegar a infectar a nuestros felinos a través de la ingestión de
            alimentos contaminados, agua no tratada o por el contacto con
            superficies contaminadas. Por otro lado, los parásitos externos,
            como pulgas y garrapatas, también pueden atacar al gato, causando no
            solo molestias y picazón, sino también la transmisión de
            enfermedades.
          </p>
          <p className={styles.losGatosIncluso}>
            Una desparasitación regular y oportuna es fundamental para:
          </p>
          <ul className={styles.prevenirProblemasDeSaludL}>
            <li className={styles.mejorarLaCalidadDeVidaAl}>
              <span className={styles.laSaludDe}>
                Prevenir problemas de salud: La presencia de parásitos puede
                llevar a la malabsorción de nutrientes, diarreas crónicas,
                pérdida de peso e incluso complicaciones más graves como
                obstrucciones intestinales.
              </span>
            </li>
            <li className={styles.mejorarLaCalidadDeVidaAl}>
              <span className={styles.laSaludDe}>
                Mejorar la calidad de vida: Al eliminar los parásitos, se reduce
                el incómodo picor y se previene la irritación y las lesiones en
                la piel.
              </span>
            </li>
            <li className={styles.mejorarLaCalidadDeVidaAl}>
              <span
                className={styles.laSaludDe}
              >{`Proteger a la familia: Algunos parásitos tienen potencial zoonótico, lo que significa que pueden transmitirse de los animales a los humanos. Mantener a raya estas infestaciones protege también la salud de todos los integrantes del hogar. `}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.row}>
          <Article
            title="Procedimientos de desparasitación para gatos interiores"
            subtitle="Información detallada sobre métodos, beneficios y frecuencia de desparasitación"
          />
        </div>
        <Article
          articleFlex="unset"
          articleAlignSelf="stretch"
          imageContainerBackgroundImage="url('/image-container1@3x.png')"
          title="Consejos para alimentación saludable de gatos interiores"
          subtitle="Descubre cómo elegir la dieta adecuada para garantizar una vida sana y feliz a tu gato."
        />
        <Article
          articleFlex="unset"
          articleAlignSelf="stretch"
          imageContainerBackgroundImage="url('/image-container2@3x.png')"
          title="Cómo mantener a tu gato activo y feliz dentro de casa
"
          subtitle="Ideas de juegos, accesorios y actividades para combatir el aburrimiento y fomentar su bienestar."
        />
        <Article
          articleFlex="unset"
          articleAlignSelf="stretch"
          imageContainerBackgroundImage="url('/image-container3@3x.png')"
          title="Importancia de las visitas regulares al veterinario para gatos interiores
"
          subtitle="Infórmate sobre las ventajas de los chequeos periódicos para prevenir enfermedades y cuidar la salud de tu mascota."
        />
        <Article
          articleFlex="unset"
          articleAlignSelf="stretch"
          imageContainerBackgroundImage="url('/image-container4@3x.png')"
          title="5 señales de que tu perro está estresado y cómo ayudarlo"
          subtitle="Aprende a identificar el estrés en tu mascota y las mejores formas de mantener su bienestar emocional."
        />
      </div>
      <img className={styles.contentsChild} alt="" src="/vector-200.svg" />
    </div>
  );
};

export default Contents;
