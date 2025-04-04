import { FunctionComponent } from "react";
import styles from "./VistaInicioDeSesion.module.css";
import { useState } from "react";


const VistaInicioDeSesion: FunctionComponent = () => {
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword); // Alternar entre true/false mostrar la contraseña
    }; 
    return (
    <div className={styles.container}>

        <div className={styles.brand}>
        <img className={styles.logo} src="/icon.svg" alt="Logo" />
        <div className={styles.textContainer}>
            <span className={styles.veterinaria}>Veterinaria</span>
            <span className={styles.mascohogar}>MascoHogar</span>
        </div>
        </div>

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
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña" 
            />
            <button type="button"  className={styles.showPassword} onClick={togglePasswordVisibility}>
                <img       
                    src={showPassword ? "/eye-slash.svg" : "/eyefill.svg"} 
                    alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} 
                />
            </button>
          </div>
        </div>

        <div className={styles.actionsRow}>
            <a href="#" className={styles.forgotPassword}>¿Has olvidado tu contraseña?</a>
            <button className={styles.loginButton}>Iniciar sesión</button>
        </div>

        <div className={styles.signupPrompt}>
          <span>¿Aún no tienes una cuenta?</span>
          <a href="#" className={styles.signupLink}>Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default VistaInicioDeSesion;