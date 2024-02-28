import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";

function UserForm() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const navigate = useNavigate();

  const { userData, setUserData } = useContext(UserContext);

  const submit = (data) => {
    // createUser(data, navigate);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
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
            <label className="mb-3 block text-lg font-semibold" htmlFor="name">
              Nombre
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 text-GrayDark shadow-xl outline-none"
              {...register("name", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
              type="text"
              id="name"
              placeholder="Ingresa tu nombre"
              defaultValue={userData.username}
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
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 text-GrayDark shadow-xl outline-none"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
              type="email"
              id="email"
              placeholder="ejemplo@gmail.com"
              defaultValue={userData.email}
            />
            <small className="text-xs font-medium text-red-700">
              {errors.email?.type === "required" &&
                "* Correo electrónico es requerido"}
              {errors.email?.type === "pattern" &&
                "* Correo electrónico ingresado tiene un formato incorrecto"}
            </small>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="phone">
              Número de teléfono
            </label>
            <input
              {...register("phoneNumber", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 text-GrayDark shadow-2xl outline-none"
              type="tel"
              placeholder="Número de teléfono (10 dígitos)"
              defaultValue={userData.phoneNumber}
            />
            <small className="text-xs font-medium text-red-700">
              {errors.phoneNumber &&
                errors.phoneNumber?.type === "required" &&
                "* Número de teléfono es requerido"}
              {errors.phoneNumber &&
                errors.phoneNumber?.type === "pattern" &&
                "* Por favor, introduce un número de teléfono válido (10 dígitos)."}
            </small>
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

export default UserForm;
