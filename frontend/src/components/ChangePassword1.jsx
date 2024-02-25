import { useState, useEffect } from "react";

function ChangePassword1 () {

  // const [oldPassword, setOldPassword] = useState(''); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
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

  // const handleImageUpload = (event) => { //para la imagen
  //   const selectedFile = event.target.files[0];
    
  //   if (selectedFile) {
      
  //     setImagen(URL.createObjectURL(selectedFile));
  //   }
  // };


  return (
    <main className="font-poppins bg-Primary text-black select-none">
      <section className="min-h-screen flex justify-center items-center gap-4 p-3">
      <div className=" block text-2xl font-bold leading-normal mb-10 text-center gap-4 p-3">
      {imagen && (
            <img className="rounder-full" src={imagen} alt="Imagen relacionada al cambio de contraseña" /> 
          )}

      <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Contraseña Actual</h2>
      <input 
        type="password"
        placeholder="Contraseña Actual"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Contraseña Nueva</h2>
      <input 
        type="password"
        placeholder="Contraseña Nueva"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Repetir Contraseña</h2>
      <input 
        type="password"
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
     
      <button className="bg-Positive text-white-500 font-poppins p-3 w-64 my-4 rounded-full relative " onClick={handleChangePassword1}>Actualizar Contraseña</button>
      <p>{message}</p>
    </div>
      </section>
            
      </main>
  );
}

export default ChangePassword1;