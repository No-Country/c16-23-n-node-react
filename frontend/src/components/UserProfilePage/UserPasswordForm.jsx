import { useForm } from "react-hook-form";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function UserPasswordForm() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const handlePassword3Change = (event) => {
    setPassword3(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const toggleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };

  // const navigate = useNavigate();

  const submit = (data) => {
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <section className="flex h-max items-center justify-center">
      <form
        className="w-full max-w-md rounded-xl p-6"
        onSubmit={handleSubmit(submit)}
      >
        <div className="relative mb-5">
          <label
            className="mb-3 block text-lg font-semibold"
            htmlFor="password"
          >
            Contraseña actual
          </label>
          <input
            className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 text-GrayDark shadow-xl outline-none"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Ingresa tu contraseña"
            id="password"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-full -mt-6 -translate-y-1/2 transform"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-8 w-8 font-extrabold text-slate-400" />
            ) : (
              <EyeIcon className="h-8 w-8 font-extrabold text-slate-400" />
            )}
          </button>
          <small className="text-xs font-medium text-red-700">
            {errors.password?.type === "required" &&
              "* Contraseña es requerida"}
            {errors.password?.type === "minLength" &&
              "* Contraseña ingresada tiene menos de 8 caracteres"}
            {errors.password?.type === "maxLength" &&
              "* Contraseña ingresada tiene más de 20 caracteres"}
          </small>
        </div>
        <div className="relative mb-5">
          <label
            className="mb-3 block text-lg font-semibold"
            htmlFor="password2"
          >
            Contraseña nueva
          </label>
          <input
            className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 text-GrayDark shadow-xl outline-none"
            {...register("password2", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
            type={showPassword2 ? "text" : "password"}
            value={password2}
            onChange={handlePassword2Change}
            placeholder="Ingresa tu contraseña"
            id="password2"
          />
          <button
            type="button"
            onClick={toggleShowPassword2}
            className="absolute right-3 top-full -mt-6 -translate-y-1/2 transform"
          >
            {showPassword2 ? (
              <EyeSlashIcon className="h-8 w-8 font-extrabold text-slate-400" />
            ) : (
              <EyeIcon className="h-8 w-8 font-extrabold text-slate-400" />
            )}
          </button>
          <small className="text-xs font-medium text-red-700">
            {errors.password2?.type === "required" &&
              "* Contraseña es requerida"}
            {errors.password2?.type === "minLength" &&
              "* Contraseña ingresada tiene menos de 8 caracteres"}
            {errors.password2?.type === "maxLength" &&
              "* Contraseña ingresada tiene más de 20 caracteres"}
          </small>
        </div>
        <div className="relative mb-5">
          <label
            className="mb-3 block text-lg font-semibold"
            htmlFor="password3"
          >
            Confirmar Contraseña
          </label>
          <input
            className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 text-GrayDark shadow-2xl outline-none"
            {...register("password3", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
            type={showPassword3 ? "text" : "password"}
            value={password3}
            onChange={handlePassword3Change}
            placeholder="Repite tu contraseña"
            id="password3"
          />
          <button
            type="button"
            onClick={toggleShowPassword3}
            className="absolute right-3 top-full -mt-6 -translate-y-1/2 transform"
          >
            {showPassword3 ? (
              <EyeSlashIcon className="h-8 w-8 font-extrabold text-slate-400" />
            ) : (
              <EyeIcon className="h-8 w-8 font-extrabold text-slate-400" />
            )}
          </button>
          <small className="text-xs font-medium text-red-700">
            {errors.password3?.type === "required" &&
              "* Contraseña es requerida"}
            {errors.password3?.type === "minLength" &&
              "* Contraseña ingresada tiene menos de 8 caracteres"}
            {errors.password3?.type === "maxLength" &&
              "* Contraseña ingresada tiene más de 20 caracteres"}
          </small>
        </div>
        <div className="my-8 flex flex-col items-center justify-center gap-4">
          <button className="h-10 w-240 rounded-2xl bg-Tertiary p-2 text-base text-white">
            Actualizar contraseña
          </button>
          <button className="h-10 w-240 rounded-2xl bg-Alert p-2 text-base text-white">
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserPasswordForm;
