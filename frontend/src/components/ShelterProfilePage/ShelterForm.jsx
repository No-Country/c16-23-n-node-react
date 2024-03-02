import { useForm } from "react-hook-form";

function ShelterForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const submit = (data) => {
    // createUser(data, navigate);
    reset({
      shelterName: "",
      reponsible: "",
      email: "",
      password: "",
      description: "",
    });
  };

  return (
    <>
      <section className="flex h-max items-center justify-center">
        <form
          className="w-full max-w-md rounded-xl p-6"
          onSubmit={handleSubmit(submit)}
        >
          <div className="mb-5">
            <label
              className="mb-3 block text-lg font-semibold"
              htmlFor="shelterName"
            >
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
            <label
              className="mb-3 block text-lg font-semibold"
              htmlFor="responsible"
            >
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
            <label
              className="mb-3 block text-lg font-semibold"
              htmlFor="description"
            >
              Descripción
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-10 shadow-xl outline-none"
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

          <div className="my-8 flex flex-col items-center justify-center gap-4">
            <button className="h-10 w-240 rounded-2xl bg-Tertiary p-2 text-base text-white">
              Actualizar datos
            </button>
            <button className="h-10 w-240 rounded-2xl bg-Alert p-2 text-base text-white">
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ShelterForm;
