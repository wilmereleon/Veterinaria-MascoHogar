import { FunctionComponent } from "react";
import styles from "./VistaRegistra.module.css";

const VistaRegistra: FunctionComponent = () => {
  return (
    <div className={styles.vistaRegistra}>
        <img
            className={styles.vistaRegistraChild}
            alt=""
            src="/rectangle-1.svg"
        />
        <div className={styles.emailParent}>
            <div className={styles.email}>Correo</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>ejemplo@email.com</div>
        </div>
        <div className={styles.creaTuCuentaContainer}>
            <span className={styles.brandnameTxt}>
                <p className={styles.creaTuCuenta}>
                    <span>Crea tu cuenta</span>
                    <span className={styles.span}>{` `}</span>
                </p>
            </span>
        </div>
        <div className={styles.tusDatos}>Tus datos</div>
        <div className={styles.vistaRegistraItem} />
        <div className={styles.brand}>
            <img className={styles.icon} alt="" src="/icon4.svg" />
            <img className={styles.icon1} alt="" src="/icon1.png" />
            <b className={styles.brandname}>
                <span className={styles.brandnameTxt}>
                    <span>Veterinaria</span>
                    <span className={styles.span1}>{` `}</span>
                    <span className={styles.mascohogar}>MascoHogar</span>
                </span>
            </b>
        </div>
        <div className={styles.registra}>Regístrate</div>
        <div className={styles.vistaRegistraInner} />
            <div className={styles.cancelar}>Cancelar</div>
            <div className={styles.yaEstasRegistrado}>¿Ya estás registrado?</div>
            <b className={styles.iniciaSesion}>{`Inicia sesión `}</b>
            <div className={styles.datosDeTu}>Datos de Tu Mascota</div>
            <div className={styles.emailGroup}>
            <div className={styles.email}>Contraseña</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>
                Por favor digita tu contraseña
            </div>
        </div>
        <img className={styles.eyefillIcon} alt="" src="/eyefill1.svg" />
        <div className={styles.emailContainer}>
            <div className={styles.email}>Confirma tu contraseña</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>
                Por favor digita tu contraseña
            </div>
        </div>
        <img className={styles.eyefillIcon1} alt="" src="/eyefill1.svg" />
        <div className={styles.groupDiv}>
            <div className={styles.email}>Nombres</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive3}>
                Ingresa tu nombre aquí
            </div>
        </div>
        <div className={styles.emailParent1}>
            <div className={styles.email}>Apellidos</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive3}>
                Ingresa tus apellidos aquí
            </div>
        </div>
        <div className={styles.emailParent2}>
            <div className={styles.email}>Raza</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive5}>Raza de tu mascota</div>
        </div>
        <div className={styles.emailParent3}>
            <div className={styles.email}>Edad en años</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>
                Ingresa su edad en años
            </div>
        </div>
        <div className={styles.emailParent4}>
            <div className={styles.email}>Historial</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>
            Vacunas, alergias, etc.
            </div>
        </div>
        <div className={styles.emailParent5}>
            <div className={styles.email}>Nombres</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>
                Ingresa el nombre de tu mascota
            </div>
        </div>
        <div className={styles.emailParent6}>
            <div className={styles.email}>Especie</div>
            <div className={styles.instanceChild} />
            <div className={styles.sophatleatnintrealive}>Perro, gato, etc.</div>
        </div>
    </div>
  );
};

export default VistaRegistra;