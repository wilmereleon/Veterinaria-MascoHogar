import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir al usuario
import styles from "./VistaInicioDeSesion.module.css";

/**
 * Componente `VistaInicioDeSesion`.
 *
 * Este componente representa la página de inicio de sesión para los usuarios.
 * Permite a los usuarios ingresar sus credenciales (correo y contraseña) para autenticarse.
 * Si las credenciales son correctas, el usuario es redirigido a la página previa o al Home.
 *
 * @component
 * @returns {JSX.Element} La vista de inicio de sesión.
 */
const VistaInicioDeSesion: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const adminUser = {
    email: "admin",
    password: "1234",
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Validar las credenciales
    if (email === adminUser.email && password === adminUser.password) {
      // Guardar el estado de autenticación
      localStorage.setItem("isAuthenticated", "true");

      // Redirigir al usuario a la vista de entorno de sesión
      navigate("/entorno-sesion");
    } else {
      alert("Correo o contraseña incorrectos"); // Muestra un mensaje de error
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img className={styles.icon} src="/icon.svg" alt="Logo de Veterinaria MascoHogar" />
        <b className={styles.brandname}>
          <span className={styles.brandnameTxt}>
            <span>Veterinaria</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.mascohogar}>MascoHogar</span>
          </span>
        </b>
      </div>

      <div className={styles.formContainer}>
        <h2 className={styles.subtitle}>Iniciar sesión</h2>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Correo</label>
          <input
            id="email"
            className={styles.input}
            type="text"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <div className={styles.passwordInput}>
            <input
              id="password"
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={styles.showPassword}
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              <img
                src={showPassword ? "/eye-slash.svg" : "/eyefill.svg"}
                alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              />
            </button>
          </div>
        </div>

        <div className={styles.actionsRow}>
          <a href="#" className={styles.forgotPassword}>¿Has olvidado tu contraseña?</a>
          <button
            className={styles.loginButton}
            type="button"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
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