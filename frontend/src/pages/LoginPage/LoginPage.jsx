/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import line from "/img/others/line2.svg";
import Navbar from "../../components/shared/Navbar";
import useAuthUser from "../../hooks/useAuthUser";
import useShelter from "../../hooks/useShelter";

function LoginPage() {
  const { loginUser } = useAuthUser();
  const { loginShelter } = useShelter();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const navigate = useNavigate();

  const location = useLocation();

  const isShelterLogin = location.pathname === "/loginShelter";
  const isUserLogin = location.pathname === "/loginUser";

  const submit = async (data) => {
    if (isShelterLogin) {
      loginShelter(data);
    } else if (isUserLogin) {
      loginUser(data);
    }
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary font-poppins text-black">
        <section className="flex min-h-screen items-center justify-center">
          <form
            className="w-full max-w-md rounded-xl p-6"
            onSubmit={handleSubmit(submit)}
          >
            <strong className="mb-10 block text-center text-2xl font-bold leading-normal">
              Inicia Sesión
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
              <label className="ml-2 text-sm">¿No tienes una cuenta?</label>
              <Link
                to={
                  isUserLogin
                    ? "/adopterRegistration"
                    : isShelterLogin
                      ? "/shelterRegistration"
                      : "/"
                }
                className="ml-2 text-sm text-blue-500"
              >
                Creala Aquí
              </Link>
            </div>
            <div className="mb-5 flex justify-center">
              <button className="my-4 w-1/2 rounded-2xl bg-Tertiary p-2 text-lg text-white">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
export default LoginPage;
