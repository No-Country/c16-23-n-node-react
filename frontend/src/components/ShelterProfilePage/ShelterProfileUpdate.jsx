import React, { useState } from "react";
import SocialIcons from "./SocialIcons"; 
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import ShelterProfileInformation from "./ShelterProfileInformation";

function ShelterProfileUpdate(props) {
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (data) => {
    createUser(data, navigate);
    reset({
      shelterName: "",
      reponsible: "",
      email: "",
      password: "",
      description: "",
      userName:"",
    });
    

  navigate("/shelterprofile");

  };
  return (
    <>
    <main className="select-none bg-Primary pt-16 font-poppins text-black">
      <div className="flex justify-center">
        {/* Código para cargar imagen de perfil */}
      </div>

      <section className="h-600 flex flex-col justify-start gap-3 px-8 py-4 font-poppins">
      
      <form
          className="w-full max-w-md rounded-xl p-6"
          onSubmit={handleSubmit(submit)}
        >
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="shelterName">
              Nombre del Refugio
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("shelterName", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
              type="text"
              id="name"
              placeholder="Nombre del Refugio"
            />
            <small className="text-xs font-medium text-red-700">
              {errors.name?.type === "required" && "* Nombre es requerido"}
              {errors.name?.type === "minLength" &&
                "* Nombre ingresado tiene menos de 8 caracteres"}
              {errors.name?.type === "maxLength" &&
                "* Nombre ingresado tiene más de 20 caracteres"}
            </small>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="responsible">
              Responsable
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("responsible", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
              type="text"
              id="responsible"
              placeholder="Responsable"
            />
            <small className="text-xs font-medium text-red-700">
              {errors.name?.type === "required" && "* Nombre es requerido"}
              {errors.name?.type === "minLength" &&
                "* Nombre ingresado tiene menos de 8 caracteres"}
              {errors.name?.type === "maxLength" &&
                "* Nombre ingresado tiene más de 20 caracteres"}
            </small>
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              type="email"
              id="email"
              placeholder="ejemplo@gmail.com"
            />
            <small className="text-xs font-medium text-red-700">
              {errors.email?.type === "required" &&
                "* Correo electrónico es requerido"}
              {errors.email?.type === "pattern" &&
                "* Correo electrónico ingresado tiene un formato incorrecto"}
            </small>
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="description">
              Descripción
            </label>
            <input
              className="mt-3 block w-full rounded-3xl bg-White px-4 py-10 shadow-xl outline-none"
              {...register("description", {
                required: true,
                minLength: 8,
                maxLength: 45,
              })}
              type="text"
              id="description"
              placeholder="texto hasta 50 letras"
            />
          </div>

              

          <SocialIcons />

                   
          <div className="mt-1 flex flex-col items-center justify-center gap-2">
          <button className="w-200 h-10 rounded-2xl bg-Tertiary text-White"
           type="submit" onClick={submit}>
            Guardar Cambios
            </button>
          </div>
       
       <div className="mt-1 flex flex-col items-center justify-center gap-2">
          <button
            className="w-200 h-10 rounded-2xl bg-Alert text-White"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </div>
        </form>
      </section>
    </main>
    </>
  );
}

export default ShelterProfileUpdate;
