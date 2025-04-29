import { FunctionComponent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./VistaInicioDeSesion.module.css";

const VistaInicioDeSesion: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Ruta a la que se redirigirá después de iniciar sesión
  const from = location.state?.from || "/entorno-sesion";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Obtener usuarios registrados del localStorage
      const storedUsers = localStorage.getItem('vetUsers');
      if (!storedUsers) {
        setError("No hay usuarios registrados");
        return;
      }

      const users = JSON.parse(storedUsers);
      
      // Buscar usuario por email y contraseña
      const user = users.find((u: any) => 
        u.user.email === email && u.user.password === password
      );

      if (user) {
        // Guardar datos de sesión
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        
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

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Correo</label>
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
              type="submit"
            >
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