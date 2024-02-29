/* eslint-disable no-unused-vars */
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { useForm } from "react-hook-form";

function AdopcionFormPage() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (e) => {
    console.log("entro");
  };
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary p-5 pt-16">
        <h1 className="my-5 font-poppins text-xl ">
          Por favor ayúdanos a conocerte mejor, el refugio encargado se pondrá
          en contacto contigo una vez revisada tu solicitud
        </h1>

        <h2 className="my-5 font-poppins text-xl font-bold">
          Informacion pesonal
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-5">
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("nombre", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="nombre"
                placeholder="Nombre"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.nombre?.type === "required" &&
                  "* El nombre es requerido"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
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
                  "* Correo Electrónico es requerido"}
                {errors.email?.type === "pattern" &&
                  "* Correo Electrónico ingresado tiene un formato incorrecto"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="telefono"
              >
                Numero de telefono
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("telefono", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="number"
                id="telefono"
                placeholder="+5422221451"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.telefono?.type === "required" &&
                  "* El telefono es requerido"}
              </small>
            </div>
          </div>
          <h2 className="my-5 font-poppins text-xl font-bold">
            Sobre la mascota
          </h2>
          <div className="m-5">
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="responsable"
              >
                ¿Quién será la persona responsable de los gastos?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("responsable", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="responsable"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.responsable?.type === "required" &&
                  "* El responsable es requerido"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="responsable"
              >
                ¿Cuántas personas en tu hogar?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("personas", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="number"
                id="personas"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.responsable?.type === "required" &&
                  "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="deAcuerdo"
              >
                ¿Están todas las personas en casa de acuerdo con la adopción?
              </label>
              <select
                className=" px-auto mt-1 block w-full rounded-3xl bg-White py-2 text-GrayDark shadow-xl outline-none"
                {...register("deAcuerdo", { required: true })}
                id="deAcuerdo"
              >
                <option value="">Selecciona</option>
                <option value="si" className="text-GrayDark">
                  Sí
                </option>
                <option value="no" className="text-GrayDark">
                  No
                </option>
              </select>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="noEsta"
              >
                ¿Quién estará con la mascota cuando usted no esté en casa?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("noEsta", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="noEsta"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.noEsta?.type === "required" && "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="presupuesto"
              >
                ¿Cuánto consideras presupuestado para cubrir los gastos de la
                mascota? (en ARS)
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("presupuesto", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="number"
                id="presupuesto"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.presupuesto?.type === "required" &&
                  "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="dormir"
              >
                ¿Dónde dormirá la mascota?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("dormir", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="dormir"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.dormir?.type === "required" && "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="tuvoMascota"
              >
                ¿Ha tenido o tiene mascotas? ¿Cuales son?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-2 shadow-xl outline-none"
                {...register("tuvoMascota", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="tuvoMascota"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.tuvoMascota?.type === "required" &&
                  "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="tuvoMascota"
              >
                De las siguientes opciones por favor indique a cuáles tendría
                acceso la mascota
              </label>
              <div className="flex flex-col">
                <label className="mb-5 inline-flex items-center">
                  <input
                    type="checkbox"
                    value="aireLibre"
                    className="form-checkbox h-5 w-5 text-gray-500  focus:ring-0"
                  />
                  <span className="ml-2">Espacios al aire libre</span>
                </label>
                <label className="mb-5 inline-flex items-center">
                  <input
                    type="checkbox"
                    value="paseos"
                    className="form-checkbox h-5 w-5 text-gray-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  />
                  <span className="ml-2">Paseos</span>
                </label>
                <label className="mb-5 inline-flex items-center">
                  <input
                    type="checkbox"
                    value="vacunacion"
                    className="form-checkbox h-5 w-5 text-gray-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  />
                  <span className="ml-2">Vacunacion y vitaminas</span>
                </label>
                <label className="mb-5 inline-flex items-center">
                  <input
                    type="checkbox"
                    value="veterinario"
                    className="form-checkbox h-5 w-5 text-gray-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  />
                  <span className="ml-2">
                    Visitas periodicas a la veterinaria
                  </span>
                </label>
                <label className="mb-5 inline-flex items-center">
                  <input
                    type="checkbox"
                    value="baño"
                    className="form-checkbox h-5 w-5 text-gray-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  />
                  <span className="ml-2">Baño y peinado</span>
                </label>
                <label className="mb-5 inline-flex items-center">
                  <input
                    type="checkbox"
                    value="Desparasitación"
                    className="form-checkbox h-5 w-5 text-gray-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  />
                  <span className="ml-2">Desparasitación</span>
                </label>
              </div>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="tuvoMascota"
              >
                ¿Por qué quieres adoptar?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 pb-32 pt-2 shadow-xl outline-none"
                {...register("motivo", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="motivo"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.motivo?.type === "required" && "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="tuvoMascota"
              >
                ¿Existe algún motivo por el cuál devolverías la mascota?
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 pb-32 pt-2 shadow-xl outline-none"
                {...register("motivoDevolucion", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                })}
                type="text"
                id="motivoDevolucion"
                placeholder="Campo rellenable"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.motivoDevolucion?.type === "required" &&
                  "* Es dato obligatorio"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block font-poppins text-sm font-semibold"
                htmlFor="deAcuerdo"
              >
                ¿Estás de acuerdo con que el refugio permanezca en contacto
                contigo?
              </label>
              <select
                className=" px-auto mt-1 block w-full rounded-3xl bg-White py-2 text-GrayDark shadow-xl outline-none"
                {...register("deAcuerdo", { required: true })}
                id="deAcuerdo"
              >
                <option value="">Selecciona</option>
                <option value="si" className="text-GrayDark">
                  Sí
                </option>
                <option value="no" className="text-GrayDark">
                  No
                </option>
              </select>
            </div>
          </div>
          <button
            className="h-12 w-full rounded-2xl bg-Tertiary text-White md:w-2/3 lg:w-1/2"
            type="submit"
            onClick={console.log("toque")}
          >
            Enviar Formulario
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default AdopcionFormPage;
