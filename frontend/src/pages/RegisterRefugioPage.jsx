import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterRefugioPage () {
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
            Registra tu refugio
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
            <label className="block mb-3 text-lg font-semibold" htmlFor="email">
              Nombre del refugio
            </label>
            <input
              className="block bg-White mt-1 w-full py-3 px-4 rounded-3xl outline-none shadow-xl"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              type="email"
              id="email"
              placeholder="Ingresa el nombre de tu refugio"
            />
            <small className="text-xs text-red-700 font-medium">
              {errors.email?.type === "required" &&
                "* Correo Electrónico es requerido"}
              {errors.email?.type === "pattern" &&
                "* Correo Electrónico ingresado tiene un formato incorrecto"}
            </small>
          </div>
          <div className="mb-5">
            <label className="block mb-3 text-lg font-semibold" htmlFor="email">
              Nombre del responsable
            </label>
            <input
              className="block bg-White mt-1 w-full py-3 px-4 rounded-3xl outline-none shadow-2xl"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              type="email"
              id="email"
              placeholder="Ingresa tu nombre"
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
              className="block bg-White mt-1 w-full py-3 px-4 rounded-3xl outline-none shadow-2xl"
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
            <label
              className="block mb-3 text-lg font-semibold"
              htmlFor="password"
            >
              Confirmar Contraseña
            </label>
            <input
              className="block bg-White mt-1 w-full py-3 px-4 rounded-3xl outline-none shadow-2xl"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
              type="password"
              placeholder="Repite tu contraseña"
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
            <input
              className="h-4 w-4 outline-none border-0"
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
            <button className="bg-Tertiary text-lg text-white p-2 w-1/2 my-4 rounded-2xl">
              Crea tu cuenta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default RegisterRefugioPage