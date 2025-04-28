import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios"; // Para interactuar con los microservicios
import Modal from "../../components/Shared/Modal"; // Importa el Modal
import styles from "./VistaRegstrate.module.css";

/**
 * Componente funcional `VistaRegstrate` que representa una página de registro
 * para clientes y sus mascotas en la aplicación de Veterinaria MascoHogar.
 *
 * @component
 * @returns {JSX.Element} Interfaz de usuario para el registro de clientes y mascotas.
 *
 * @description
 * Este componente permite a los usuarios registrar sus datos personales y los datos
 * de su mascota. Incluye validaciones básicas, como la coincidencia de contraseñas,
 * y envía los datos a los microservicios correspondientes para registrar tanto al
 * cliente como a la mascota. También incluye opciones para mostrar/ocultar contraseñas
 * y redirigir al usuario a otras páginas.
 *
 * @example
 * ```tsx
 * <VistaRegstrate />
 * ```
 *
 * @state {Object} formData - Estado que almacena los datos del formulario.
 * @state {boolean} showPassword - Estado para mostrar/ocultar la contraseña.
 * @state {boolean} showConfirmPassword - Estado para mostrar/ocultar la confirmación de la contraseña.
 * @state {boolean} isModalOpen - Estado para controlar la visibilidad del modal.
 *
 * @function handleChange
 * Maneja los cambios en los campos del formulario y actualiza el estado `formData`.
 * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - Evento de cambio del formulario.
 *
 * @function handleOpenModal
 * Abre el modal de confirmación antes de enviar los datos.
 *
 * @function handleCloseModal
 * Cierra el modal de confirmación.
 *
 * @function handleConfirmModal
 * Maneja la confirmación del modal y envía los datos a los microservicios.
 *
 * @throws {Error} Error al registrar los datos en los microservicios.
 *
 * @dependencies
 * - `axios`: Para realizar solicitudes HTTP a los microservicios.
 * - `useNavigate`: Hook de React Router para la navegación.
 * - `FiEye`, `FiEyeOff`: Iconos para mostrar/ocultar contraseñas.
 * - `Modal`: Componente reutilizable para mostrar el modal de confirmación.
 *
 * @styles
 * - `styles.vistaRegstrate`: Clase CSS para el contenedor principal.
 * - `styles.logo`: Clase CSS para el logo.
 * - `styles.brandname`, `styles.veterinaria`, `styles.mascohogar`: Clases CSS para el nombre de la marca.
 * - `styles.title`: Clase CSS para el título de la página.
 * - `styles.formContainer`: Clase CSS para el contenedor del formulario.
 * - `styles.sectionTitle`: Clase CSS para los títulos de las secciones.
 * - `styles.customFormLabel`: Clase CSS para las etiquetas de los campos del formulario.
 * - `styles.customButton`: Clase CSS para los botones personalizados.
 * - `styles.registerText`, `styles.loginLink`: Clases CSS para el texto y enlace de inicio de sesión.
 */
const VistaRegstrate: FunctionComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    phoneNumber: "",
    idType: "",
    idNumber: "",
    password: "",
    confirmPassword: "",
    petName: "",
    species: "",
    breed: "",
    color: "",
    age: "",
    weight: "",
    gender: "",
    dateOfbirth: "", // Nuevo campo para la fecha de nacimiento
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // Estado para el modal
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };


  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Cierra el modal
  };

  const handleConfirmModal = async () => {
    setModalOpen(false);
  
    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, verifica.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor ingresa un email válido");
      return;
    }
  
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("El teléfono debe contener solo números y al menos 10 dígitos");
      return;
    }
  
    const requiredFields = [
      'name', 'lastName', 'email', 'phoneNumber', 'address',
      'idType', 'idNumber', 'password',
      'petName', 'species', 'breed', 'dateOfbirth', 'gender'
    ];
  
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert(`El campo ${field} es obligatorio`);
        return;
      }
    }
  
    // Crear objeto local para guardar en localStorage
    const userData = {
      user: {
        firstName: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        phoneNumber: formData.phoneNumber,
        idType: formData.idType,
        idNumber: formData.idNumber,
        password: formData.password,
      },
      pet: {
        petName: formData.petName,
        species: formData.species,
        breed: formData.breed,
        color: formData.color,
        age: formData.age,
        weight: formData.weight,
        gender: formData.gender,
        dateOfbirth: formData.dateOfbirth,
      }
    };
  
    try {
      // Guardar en localStorage
      const existingData = localStorage.getItem('vetUsers');
      const users = existingData ? JSON.parse(existingData) : [];
  
      if (users.some((user: any) => user.user.email === formData.email)) {
        alert("El email ya está registrado");
        return;
      }
  
      users.push(userData);
      localStorage.setItem('vetUsers', JSON.stringify(users));
  
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify({
        user: {
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email
        },
        pet: {
          petName: formData.petName
        }
      }));
  
      // Intentar registro en backend (NO detener el flujo si falla)
      try {
        console.log("Intentando registrar mascota en servidor...");
        const petResponse = await axios.post('http://localhost:8080/api/pet/ceate', {
          name: formData.petName,
          species: formData.species,
          breed: formData.breed,
          color: formData.color,
          age: formData.age,
          weight: parseFloat(formData.weight),
          gender: formData.gender,
          dateOfbirth: formData.dateOfbirth,
        });
  
        console.log("Mascota registrada:", petResponse.data);
  
        console.log("Intentando registrar cliente en servidor...");
        const clientResponse = await axios.post('http://localhost:8080/api/client/ceate', {
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          registrationDate: new Date().toISOString().split("T")[0],
          petId: petResponse.data.id,
        });
  
        console.log("Cliente registrado:", clientResponse.data);
  
      } catch (apiError: any) {
        console.error("Error al registrar en servidor:", apiError);
  
        if (apiError.response) {
          alert(`Advertencia: ${apiError.response.data.message || "No se pudo registrar en el servidor, pero te registramos localmente."}`);
        } else if (apiError.request) {
          alert("Advertencia: No se pudo conectar con el servidor. Se guardó tu registro localmente.");
        } else {
          alert(`Advertencia: ${apiError.message}`);
        }
      }
  
      // Mostrar mensaje de éxito general (local)
      alert("¡Registro exitoso! Bienvenido a Veterinaria MascoHogar");
  
      // Redirigir
      navigate("/entorno-sesion", {
        state: {
          justRegistered: true,
          userName: formData.name,
          petName: formData.petName
        }
      });
  
    } catch (error) {
      console.error("Error al guardar los datos localmente:", error);
      alert("Ocurrió un error al guardar los datos localmente");
    }
  };
  

  return (
    <div className={`container-fluid ${styles.vistaRegstrate}`}>
      <div className="text-center my-4">
        <img src="/icon4.svg" alt="Logo" className={styles.logo} />
        <h1 className={styles.brandname}>
          <span className={styles.veterinaria}>Veterinaria</span>
          <span className={styles.mascohogar}>MascoHogar</span>
        </h1>
        <h2 className={styles.title}>Crea tu cuenta</h2>
      </div>

      <div className={`container ${styles.formContainer} p-4 rounded shadow-sm`}>
        <form onSubmit={handleOpenModal}>
          <h3 className={styles.sectionTitle}>Tus datos</h3>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="name" className={`${styles.customFormLabel}`}>Nombres</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingresa tu nombre aquí"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className={`${styles.customFormLabel}`}>Apellidos</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Ingresa tus apellidos aquí"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className={`${styles.customFormLabel}`}>Correo</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ejemplo@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="address" className={`${styles.customFormLabel}`}>Dirección de residencia</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Ingresa tu dirección"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="phoneNumber" className={`${styles.customFormLabel}`}>Teléfono celular</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Ingresa tu teléfono celular"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="idType" className={`${styles.customFormLabel}`}>Tipo de identificación</label>
              <select
                className="form-control"
                id="idType"
                value={formData.idType}
                onChange={handleChange}
              >
                <option value="">Selecciona el tipo de identificación</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="ti">Tarjeta de identidad</option>
                <option value="passport">Pasaporte</option>
                <option value="nit">NIT</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="idNumber" className={`${styles.customFormLabel}`}>Número de identificación</label>
              <input
                type="text"
                className="form-control"
                id="idNumber"
                placeholder="Ingrese número de ID"
                value={formData.idNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="password" className={`${styles.customFormLabel}`}>Contraseña</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Por favor digita tu contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="confirmPassword" className={`${styles.customFormLabel}`}>Confirma tu contraseña</label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Por favor digita tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
          </div>

          <h3 className={`${styles.sectionTitle} mt-4`}>Datos de tu mascota</h3>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="petName" className={`${styles.customFormLabel}`}>Nombre</label>
              <input
                type="text"
                className="form-control"
                id="petName"
                placeholder="Ingresa el nombre de tu mascota"
                value={formData.petName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="species" className={`${styles.customFormLabel}`}>Especie</label>
              <input
                type="text"
                className="form-control"
                id="species"
                placeholder="Perro, gato, etc."
                value={formData.species}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="breed" className={`${styles.customFormLabel}`}>Raza</label>
              <input
                type="text"
                className="form-control"
                id="breed"
                placeholder="Raza de tu mascota"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="dateOfbirth" className={`${styles.customFormLabel}`}>Fecha de nacimiento</label>
              <input
                type="date"
                className="form-control"
                id="dateOfbirth"
                value={formData.dateOfbirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="weight" className={`${styles.customFormLabel}`}>Peso</label>
              <input
                type="number"
                step="0.1"
                className="form-control"
                id="weight"
                placeholder="Peso de tu mascota en kg"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="color" className={`${styles.customFormLabel}`}>Color</label>
              <input
                type="text"
                className="form-control"
                id="color"
                placeholder="Color de tu mascota"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="gender" className={`${styles.customFormLabel}`}>Género</label>
              <select
                className="form-control"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el género</option>
                <option value="Male">Macho</option>
                <option value="Female">Hembra</option>
              </select>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
            <button
              type="button"
              className={`${styles.customButton}`}
              onClick={() => navigate("/veterinaria-mascohogar-pc-home")}
            >
              Cancelar
            </button>
            <button type="submit" className={`${styles.customButton}`}>Regístrate</button>
          </div>
        </form>
        
        {/* Modal de confirmación */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        title="Confirma tu acción"
        message="¿Estás seguro de que deseas proceder con el registro?"
      />


        {/* Sección: ¿Ya estás registrado? */}
        <div className="text-center mt-3">
          <p className={styles.registerText}>¿Ya estás registrado?</p>
            <a
            href="#"
            className={styles.loginLink}
            onClick={() => navigate("/login")}
            >   
              Inicia sesión
            </a>
        </div>
      </div>
    </div>

    
  );
};

export default VistaRegstrate;