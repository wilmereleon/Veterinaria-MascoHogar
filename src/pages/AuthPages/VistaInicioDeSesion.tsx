import { FunctionComponent } from "react";
import styles from "./VistaInicioDeSesion.module.css";

const VistaInicioDeSesion: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      {/* Logo y marca */}
      <div className={styles.header}>
        <img className={styles.logo} src="/icon2.svg" alt="Logo" />
        <h1 className={styles.title}>Veterinaria <span>MascoHogar</span></h1>
      </div>

      {/* Formulario de inicio de sesión */}
      <div className={styles.formContainer}>
        <h2 className={styles.subtitle}>Iniciar sesión</h2>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Correo</label>
          <input 
            className={styles.input} 
            type="email" 
            placeholder="Ingresa tu correo" 
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Contraseña</label>
          <div className={styles.passwordInput}>
            <input 
              className={styles.input} 
              type="password" 
              placeholder="Ingresa tu contraseña" 
            />
            <button className={styles.showPassword}>
              <img src="/eyefill.svg" alt="Mostrar contraseña" />
            </button>
          </div>
        </div>

        <a href="#" className={styles.forgotPassword}>¿Has olvidado tu contraseña?</a>

        <button className={styles.loginButton}>Iniciar sesión</button>

        <div className={styles.signupPrompt}>
          <span>¿Aún no tienes una cuenta?</span>
          <a href="#" className={styles.signupLink}>Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default VistaInicioDeSesion;