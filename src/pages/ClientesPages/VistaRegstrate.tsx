import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import styles from "./VistaRegstrate.module.css";

const VistaRegstrate: FunctionComponent = () => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Estados para almacenar los datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [petName, setPetName] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petHistory, setPetHistory] = useState("");

  // Función para manejar el clic en "Registrar"
  const handleRegister = () => {
    // Validación de campos vacíos
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !petName ||
      !petSpecies ||
      !petBreed ||
      !petAge ||
      !petHistory
    ) {
      alert("Por favor, completa todos los campos antes de continuar.");
      return;
    }

    // Validación de formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    // Validación de contraseñas
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, verifica.");
      return;
    }

    // Si todo está validado, redirige a la página de entorno de sesión
    navigate("/entorno-sesion");
  };

  return (
    <div className={styles.vistaRegstrate}>
      <img
        className={styles.vistaRegstrateChild}
        alt=""
        src="/rectangle-1.svg"
      />
      <div className={styles.emailParent}>
        <label className={styles.email}>Correo</label>
        <input
          type="email"
          className={styles.instanceChild}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo@email.com"
        />
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
      <div className={styles.vistaRegstrateItem} />
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
      <button
        className={styles.cancelar}
        onClick={() => navigate("/veterinaria-mascohogar-pc-home")} // Redirige a Home
      >
        Cancelar
      </button>
      <button
        className={styles.regstrate}
        onClick={handleRegister} // Llama a la función de validación y registro
      >
        Regístrate
      </button>
      <div className={styles.yaEstsRegistrado}>¿Ya estás registrado?</div>
      <b
        className={styles.iniciaSesin}
        onClick={() => navigate("/login")} // Redirige a la vista de inicio de sesión
      >
        Inicia sesión
      </b>
      <div className={styles.datosDeTu}>Datos de Tu Mascota</div>
      <div className={styles.emailGroup}>
        <label className={styles.email}>Contraseña</label>
        <input
          type="password"
          className={styles.instanceChild}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Por favor digita tu contraseña"
        />
      </div>
      <div className={styles.emailContainer}>
        <label className={styles.email}>Confirma tu contraseña</label>
        <input
          type="password"
          className={styles.instanceChild}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Por favor digita tu contraseña"
        />
      </div>
      <div className={styles.groupDiv}>
        <label className={styles.email}>Nombres</label>
        <input
          type="text"
          className={styles.instanceChild}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Ingresa tu nombre aquí"
        />
      </div>
      <div className={styles.emailParent1}>
        <label className={styles.email}>Apellidos</label>
        <input
          type="text"
          className={styles.instanceChild}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Ingresa tus apellidos aquí"
        />
      </div>
      <div className={styles.emailParent2}>
        <label className={styles.email}>Raza</label>
        <input
          type="text"
          className={styles.instanceChild}
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
          placeholder="Raza de tu mascota"
        />
      </div>
      <div className={styles.emailParent3}>
        <label className={styles.email}>Edad en años</label>
        <input
          type="number"
          className={styles.instanceChild}
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
          placeholder="Ingresa su edad en años"
        />
      </div>
      <div className={styles.emailParent4}>
        <label className={styles.email}>Historial</label>
        <textarea
          className={styles.instanceChild}
          value={petHistory}
          onChange={(e) => setPetHistory(e.target.value)}
          placeholder="Vacunas, alergias, etc."
        />
      </div>
      <div className={styles.emailParent5}>
        <label className={styles.email}>Nombres</label>
        <input
          type="text"
          className={styles.instanceChild}
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          placeholder="Ingresa el nombre de tu mascota"
        />
      </div>
      <div className={styles.emailParent6}>
        <label className={styles.email}>Especie</label>
        <input
          type="text"
          className={styles.instanceChild}
          value={petSpecies}
          onChange={(e) => setPetSpecies(e.target.value)}
          placeholder="Perro, gato, etc."
        />
      </div>
    </div>
  );
};

export default VistaRegstrate;