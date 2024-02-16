import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import line from "../assets/line.svg";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    // loginUser(data, navigate);
  };

  return (
    <main className="font-poppins bg-Primary text-black select-none">
      <section className="min-h-screen flex justify-center items-center">
        <form
          className="w-full max-w-md rounded-xl p-6"
          onSubmit={handleSubmit(submit)}
        >
          <figure className="uppercase font-bold text-2xl text-center mb-8">
            logo
          </figure>
          <strong className="block text-2xl font-bold leading-normal mb-10 text-center">
            Inicia Sesión
          </strong>
          <div className="mb-5">
            <label className="block mb-3 text-lg font-semibold" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="block bg-White mt-1 w-full py-3 px-4 rounded-3xl outline-none shadow-xl"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              type="email"
              id="email"
              placeholder="ejemplo@gmail.com"
            />
            <small className="text-xs text-red-700 font-medium">
              {errors.email?.type === "required" &&
                "* Correo Electrónico es requerido"}
              {errors.email?.type === "pattern" &&
                "* Correo Electrónico ingresado tiene un formato incorrecto"}
            </small>
          </div>
          <div className="mb-5">
            <label
              className="block mb-3 text-lg font-semibold"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="block bg-White mt-1 w-full py-3 px-4 rounded-3xl outline-none shadow-xl"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
            <small className="text-xs text-red-700 font-medium">
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
            <Link to="/typeRegister" className="ml-2 text-sm text-blue-500">
              Creala Aquí
            </Link>
          </div>
          <div className="mb-5 flex justify-center">
            <button className="bg-Tertiary text-lg text-white p-2 w-1/2 my-4 rounded-2xl">
              Iniciar Sesión
            </button>
          </div>
          <div className="mb-5 flex justify-center items-center relative">
            <label className="ml-2 text-sm z-10 relative bg-Primary px-3">O inicia con</label>
            <img className="absolute top-2.5 z-0" src={line} alt="" />
          </div>
          <div className="mb-5 flex justify-center items-center gap-2">
            <Link className="bg-PrimaryDark flex items-center justify-center text-lg text-white p-2  my-4 w-14 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
              </svg>
            </Link>
            <Link className="bg-PrimaryDark flex items-center justify-center text-lg text-white p-2  my-4 w-14 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-white"
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
              </svg>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
export default LoginPage;
