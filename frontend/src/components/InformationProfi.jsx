import { useState, useEffect } from "react";

function InformationProfi () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

  
    const handleInformation = (e) => {
      const { name, value } = e.target;
      setName(value);
    };
  
    const handleInformationP = () => {
      const errors = {}; 
  
      if (!name.trim()) {
        errors.name = "Nombre es obligatorio";
      }
  
      if (!email.trim()) {
        errors.email = "Correo electrónico es obligatorio";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Correo electrónico inválido";
      }

      
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Implementar una mayor validación y lógica aquí (por ejemplo, comparación de contraseñas)

    setMessage("Datos guardados exitosamente");

    // Limpiar errores y entradas después de un envío exitoso
    setErrors({});
    setName("");
    setEmail("");
    setPhoneNumber("");
  };
    

        if (name === email === phoneNumber ) {
          setError(true) 
          setMessage('Datos Correctos');
          return
    
        } else {
          setMessage('Datos Incorrectos');
        }
      };
    
      const handleImageUpload = (event) => {
        const selectedFile = event.target.files[0];
        
        if (selectedFile) {
          
          setImagen(URL.createObjectURL(selectedFile));
      };
    
    
      return (
        <main className="font-poppins bg-Primary text-black select-none">
          <section className="min-h-screen flex justify-center items-center gap-4 p-3">
          <div className=" block text-2xl font-bold leading-normal mb-10 text-center gap-4 p-3">
          {imagen && (
                <img className="rounder-full" src={imagen} alt="Imagen relacionada al cambio de contraseña" /> 
              )}
    
          <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Nombre</h2>
          <input 
            type="name"
            placeholder="Nombe y Apellido"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Correo Electrónico</h2>
          <input 
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Número de Teléfono</h2>
          <input 
            type="phoneNumber"
            placeholder="Número de Teléfono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
         
          <button className="bg-Positive text-white-500 font-poppins p-3 w-64 my-4 rounded-full relative " onClick={handleInformationP}>Actualizar Datos</button>
          <p>{message}</p>
        </div>
          </section>
                
          </main>
      );
    }
    
    export default InformationProfi;