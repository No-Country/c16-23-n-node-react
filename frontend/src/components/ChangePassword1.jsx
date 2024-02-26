import { useState } from "react";
import { useForm } from "react-hook-form";


let counter= 0;

function ChangePassword1 () {

  const [oldPassword, setOldPassword] = useForm(''); 
  const [newPassword, setNewPassword] = useForm('');
  const [confirmPassword, setConfirmPassword] = useForm('');
  const [message, setMessge] = useState('');
  // const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault() 
   
    if (newPassword === "" || confirmPassword === "") { 
    setMessage(true) 
    return 
    
    } 
    setMessage(false) 
    }; 
   
    const handleChangePassword = () => { 
    if (newPassword === confirmPassword) { 
    setError(true) 
    setMessage('Contraseña actualizada exitosamente'); 
    return 
   
    } else { 
    setMessage('Las contraseñas no coinciden'); 
    } 
    }; 


  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    <main className="font-poppins bg-Primary text-black select-none">
      <section className="min-h-screen flex justify-center items-center gap-4 p-3">
      <div className=" block text-2xl font-bold leading-normal mb-10 text-center gap-4 p-3">
      {imagen && (
            <img className="rounder-full" src={imagen} alt="Imagen relacionada al cambio de contraseña" /> 
          )}


      <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Contraseña Actual</h2>
      <input 
          {...oldPassword("")} placeholder="Old password"
      />
      <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Contraseña Nueva</h2>
      <input 
         {...newPassword("")} placeholder="New password"
      />
      <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Repetir Contraseña</h2>
      <input 
         {...confirmPassword("")} placeholder="Confirm password"
      />
     
      <button className="bg-Positive text-white-500 font-poppins p-3 w-64 my-4 rounded-full relative " onClick={handleChangePassword1}>Actualizar Contraseña</button>
      <button className="bg-red-900 text-white-500 font-poppins p-3 w-64 my-4 rounded-full relative " onClick={handleChangePassword1}>Cancelar</button>
      <p>{message}</p>
    </div>
      </section>
            
      </main>
      </form>
  );
}

export default ChangePassword1;