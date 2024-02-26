import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

let counter= 0;

function InformationProfi () {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    
    
      <main className="font-poppins bg-Primary text-black select-none">
        <section className="min-h-screen flex justify-center items-center gap-4 p-3">
          <div className=" block text-2xl font-bold leading-normal mb-10 text-center gap-4 p-3">
          {imagen && (
                <img className="rounder-full" src={imagen} alt="Imagen relacionada al cambio de contraseña" /> 
              )}
    
          <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Nombre</h2>
          <input 
             {...register("firstName")} placeholder="First name" 
          />
        
          <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Correo Electrónico</h2>
          <input 
            {...register("email")} placeholder="Email"
          />
          <h2 className=" ml-2 text-sm rounder-full gap-4 p-3">Número de Teléfono</h2>
          <input 
            {...register("phoneNumber")} placeholder="Phone Number"
          />
         
          <button className="bg-Positive text-white-500 font-poppins p-3 w-64 my-4 rounded-full relative " onClick={handleInformationP}>Actualizar Datos</button>
          <button className="bg-red-900 text-white-500 font-poppins p-3 w-64 my-4 rounded-full relative " onClick={handleInformationP}>Cancelar</button>
          <p>{message}</p>
        </div>
          </section>
                
          </main>
   </form>

      );
    }
    
    export default InformationProfi;