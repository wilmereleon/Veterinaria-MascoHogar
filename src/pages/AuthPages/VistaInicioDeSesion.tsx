import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./VistaInicioDeSesion.module.css";
import UserStorage from "../../utils/UserStorage"; // Importar la clase UserStorage

/**
 * Componente funcional que representa la vista de inicio de sesión para la aplicación.
 * 
 * Este componente permite a los usuarios autenticarse ingresando su correo y contraseña.
 * También incluye funcionalidades como mostrar/ocultar la contraseña, manejo de errores
 * y redirección a una ruta protegida después de iniciar sesión correctamente.
 * 
 * @component
 * 
 * @returns {JSX.Element} El componente de la vista de inicio de sesión.
 * 
 * @remarks
 * - Si no existen usuarios registrados en el `localStorage`, se agrega un usuario predeterminado.
 * - Los datos de sesión se almacenan en el `localStorage` al iniciar sesión correctamente.
 * 
 * @example
 * ```tsx
 * <VistaInicioDeSesion />
 * ```
 * 
 * @dependencies
 * - `useState`: Para manejar el estado del correo, contraseña, visibilidad de la contraseña y errores.
 * - `useEffect`: Para inicializar el usuario predeterminado en el `localStorage`.
 * - `useNavigate`, `useLocation`: Para manejar la navegación y redirección.
 * 
 * @state
 * - `showPassword` (`boolean`): Indica si la contraseña debe mostrarse como texto o no.
 * - `email` (`string`): Almacena el correo ingresado por el usuario.
 * - `password` (`string`): Almacena la contraseña ingresada por el usuario.
 * - `error` (`string`): Almacena mensajes de error relacionados con el inicio de sesión.
 * 
 * @methods
 * - `togglePasswordVisibility`: Alterna la visibilidad de la contraseña.
 * - `handleLogin`: Maneja el evento de envío del formulario, valida las credenciales y redirige al usuario.
 * 
 * @hooks
 * - `useEffect`: Se utiliza para inicializar el usuario predeterminado en el `localStorage`.
 * - `useNavigate`: Permite redirigir al usuario después de iniciar sesión.
 * - `useLocation`: Obtiene la ubicación actual para determinar la ruta de redirección.
 * 
 * @localStorage
 * - `vetUsers`: Almacena los usuarios registrados.
 * - `isAuthenticated`: Indica si el usuario está autenticado.
 * - `currentUser`: Almacena los datos del usuario autenticado.
 */

const VistaInicioDeSesion: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Ruta a la que se redirigirá después de iniciar sesión
  const from = location.state?.from || "/entorno-sesion";

  // Agregar usuario predeterminado al localStorage si no existe
  useEffect(() => {
    const storedUsers = localStorage.getItem("vetUsers");
    if (!storedUsers) {
      const defaultUser = [
        {
          email: "admin@correo.com",
          password: "1234",
          name: "Administrador", // Agrega un nombre predeterminado
        },
      ];
      localStorage.setItem("vetUsers", JSON.stringify(defaultUser));
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Obtener usuarios registrados
      const users = UserStorage.getUsers();

      // Buscar usuario por email y contraseña
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        // Guardar datos de sesión
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("username", user.name || "Usuario"); // Asegúrate de guardar un valor válido

        // Redirigir al área privada
        navigate(from, { replace: true });
      } else {
        setError("Correo o contraseña incorrectos");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img
          className={styles.icon}
          src="/icon.svg"
          alt="Logo de Veterinaria MascoHogar"
        />
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

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Correo
            </label>
            <input
              id="email"
              className={styles.input}
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Contraseña
            </label>
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
            <a href="#" className={styles.forgotPassword}>
              ¿Has olvidado tu contraseña?
            </a>
            <button className={styles.loginButton} type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>

        <div className={styles.signupPrompt}>
          <span>¿Aún no tienes una cuenta?</span>
          <a
            href="#"
            className={styles.signupLink}
            onClick={() => navigate("/registro")}
          >
            Crear una cuenta
          </a>
        </div>
      </div>
    </div>
  );
};

export default VistaInicioDeSesion;