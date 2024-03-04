import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShelterPassword() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm(); 
  const [message, setMessage] = useState('');

  const onSubmit = (data, navigate) => { 
    if (data.newPassword === "" || data.confirmPassword === "") { 
      setMessage('Debe ingresar la nueva contraseña y confirmarla.'); 
      return; 
    } 
    
    if (data.newPassword !== data.confirmPassword) {
      setMessage('Las contraseñas no coinciden.'); 
      return;
    }
    

    setMessage('Contraseña actualizada exitosamente.');
   
    navigate("/shelterprofile");

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }; 
}

  return (
   
    
    <main className="select-none bg-Primary pt-16 font-poppins text-black">
    <div className="flex justify-center">
      {/* Código para cargar imagen de perfil */}
    </div>

    <form
        className="w-full max-w-md rounded-full p-6"
        onSubmit={handleSubmit(onSubmit)}
    >
        <h1 className="mb-3 block text-xl font-semibold gap-3 px-8 py-4"> Tu Contraseña </h1>

    <section className="h-600 flex flex-col justify-start gap-3 px-8 py-4 font-poppins">
    
           <div className="mb-5 flex flex-col justify-start">
            <h2 className="mb-3 block text-lg font-semibold">Contraseña Actual</h2>
            <input className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("oldPassword")} 
              type="password"
              placeholder="Old password"
            />
            <h2 className="mb-3 block text-lg font-semibold">Contraseña Nueva</h2>
            <input className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("newPassword")} 
              type="password"
              placeholder="New password"
            />
            <h2 className="mb-3 block text-lg font-semibold">Confirmar Contraseña</h2>
            <input className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("confirmPassword")} 
              type="password"
              placeholder="Confirm password"
            /> 
          </div>
           
          <div className="mt-1 flex flex-col items-center justify-center gap-2">
            <button type="submit" 
            className="w-200 h-10 rounded-2xl bg-Tertiary text-White">
                Actualizar Contraseña
            </button>

            <button type="button" className="bg-red-900 w-200 h-10 rounded-2xl text-White" 
             onClick={() => navigate("/")}>
            
                Cancelar</button>
            <p>{message}</p>

            </div>
            </section>
            </form>
</main>

  );
}

export default ShelterPassword;