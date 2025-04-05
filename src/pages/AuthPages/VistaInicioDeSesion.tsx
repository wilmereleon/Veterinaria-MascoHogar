import { FunctionComponent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Para redirigir al usuario
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
  /**
   * Estado para controlar la visibilidad de la contraseña.
   * @type {boolean}
   */
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Estado para almacenar el correo ingresado por el usuario.
   * @type {string}
   */
  const [email, setEmail] = useState("");

  /**
   * Estado para almacenar la contraseña ingresada por el usuario.
   * @type {string}
   */
  const [password, setPassword] = useState("");

  /**
   * Hook para redirigir al usuario a otra página.
   * @type {Function}
   */
  const navigate = useNavigate();

  /**
   * Hook para obtener la ubicación previa del usuario.
   * @type {Object}
   */
  const location = useLocation();

  /**
   * Usuario administrador para pruebas.
   * @type {{ email: string, password: string }}
   */
  const adminUser = {
    email: "admin",
    password: "1234",
  };

  /**
   * Alterna la visibilidad de la contraseña.
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /**
   * Maneja el inicio de sesión.
   * Valida las credenciales ingresadas por el usuario.
   * Si las credenciales son correctas, guarda el estado de autenticación y redirige al usuario.
   * Si las credenciales son incorrectas, muestra un mensaje de error.
   */
  const handleLogin = () => {
    // Validar las credenciales
    if (email === adminUser.email && password === adminUser.password) {
      // Guardar el estado de autenticación
      localStorage.setItem("isAuthenticated", "true");

      // Redirigir al usuario a la página de entorno de sesión del usuario
      navigate("/clientes-pages/vista-entorno-sesion-usuario");
    } else {
      alert("Correo o contraseña incorrectos"); // Muestra un mensaje de error
    }
  };

  return (
    <div className={styles.container}>
      {/* Marca y logo */}
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

      {/* Contenedor del formulario */}
      <div className={styles.formContainer}>
        <h2 className={styles.subtitle}>Iniciar sesión</h2>

        {/* Campo de correo */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Correo</label>
          <input
            id="email"
            className={styles.input}
            type="text"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del correo
            required
          />
        </div>

        {/* Campo de contraseña */}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label>
          <div className={styles.passwordInput}>
            <input
              id="password"
              className={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
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

        {/* Acciones del formulario */}
        <div className={styles.actionsRow}>
          <a href="#" className={styles.forgotPassword}>¿Has olvidado tu contraseña?</a>
          <button
            className={styles.loginButton}
            type="button"
            onClick={handleLogin} // Maneja el clic en el botón
          >
            Iniciar sesión
          </button>
        </div>

        {/* Enlace para registrarse */}
        <div className={styles.signupPrompt}>
          <span>¿Aún no tienes una cuenta?</span>
          <a href="#" className={styles.signupLink}>Crear una cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default VistaInicioDeSesion;