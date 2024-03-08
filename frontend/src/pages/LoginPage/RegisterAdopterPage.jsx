import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import useAuthUser from "../../hooks/useAuthUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "../../modals/InfoModal";

function RegisterAdopterPage() {
  const { createUser } = useAuthUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const submit = async (data) => {
    createUser(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/loginUser");
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 text-center font-poppins text-black">
        <section className="flex min-h-screen items-center justify-center">
          <form
            className="w-full max-w-md rounded-xl p-6"
            onSubmit={handleSubmit(submit)}
          >
            <strong className="mb-10 block text-center text-2xl font-bold leading-normal">
              Regístrate
            </strong>
            <div className="mb-5">
              <label
                className="mb-3 block text-lg font-semibold"
                htmlFor="email"
              >
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
                  "* Correo Electrónico es requerido"}
                {errors.email?.type === "pattern" &&
                  "* Correo Electrónico ingresado tiene un formato incorrecto"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-lg font-semibold"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
                {...register("password", {
                  required: true,
                  minLength: 5,
                  maxLength: 20,
                })}
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.password?.type === "required" &&
                  "* Contraseña es requerida"}
                {errors.password?.type === "minLength" &&
                  "* Contraseña ingresada tiene menos de 8 caracteres"}
                {errors.password?.type === "maxLength" &&
                  "* Contraseña ingresada tiene más de 20 caracteres"}
              </small>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-lg font-semibold"
                htmlFor="firstName"
              >
                Nombre
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
                {...register("firstName", {
                  required: true,
                })}
                type="text"
                id="firstName"
                placeholder="Ingresa tu Nombre"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.firstName?.type === "required" && "* Campo requerido"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-lg font-semibold"
                htmlFor="lastName"
              >
                Apellido
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
                {...register("lastName", {
                  required: true,
                })}
                type="text"
                id="lastName"
                placeholder="Ingresa tu apellido"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.lastName?.type === "required" && "* Campo requerido"}
              </small>
            </div>
            <div className="mb-5">
              <label
                className="mb-3 block text-lg font-semibold"
                htmlFor="phone"
              >
                Telefono
              </label>
              <input
                className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
                {...register("phone", {
                  required: true,
                })}
                type="number"
                id="phone"
                placeholder="Ingresa tu numero"
              />
              <small className="text-xs font-medium text-red-700">
                {errors.phone?.type === "required" && "* Campo requerido"}
              </small>
            </div>
            <div className="mb-5">
              <input
                className="h-4 w-4 border-0 outline-none"
                type="checkbox"
              />
              <label className="ml-2 text-sm" htmlFor="checkbox">
                Aceptar Términos y Condiciones
              </label>
            </div>
            <div className="mb-5">
              <label className="ml-2 text-sm">¿Ya tienes cuenta?</label>
              <Link to="/login" className="ml-2 text-sm text-blue-500">
                Ingresa Aquí
              </Link>
            </div>
            <div className="mb-5 flex justify-center">
              <button className="my-4 w-1/2 rounded-2xl bg-Tertiary p-2 text-lg text-white">
                Crea tu cuenta
              </button>
            </div>
          </form>
        </section>
         {/* Modal */}
         {showModal && (
          <InfoModal
            title="Registro Exitoso"
            content={
              <p>
                ¡Hemos enviado un correo de verificación! Por favor, revisa tu
                bandeja de entrada.
              </p>
            }
            closeModal={closeModal}
          />
        )}
      </main>
    </>
  );
}
export default RegisterAdopterPage;
