import { useNavigate } from "react-router-dom";

function UserProfileInformation() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/updateUserInformation");
  };

  const handleChangePassword = () => {
    navigate("/updateUserPassword");
  };

  return (
    <section className="h-400 flex flex-col justify-start gap-3 px-8 py-4 font-poppins">
      <span className="text-base font-semibold">Nombre</span>
      <span>User342</span>
      <span className="text-base font-semibold">Correo</span>
      <span>example@gmail.com</span>
      <span className="text-base font-semibold">Número de teléfono</span>
      <span className="italic">+54 555555555</span>
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <button
          className="w-200 h-10 rounded-2xl bg-Tertiary text-White"
          onClick={handleEditProfile}
        >
          Editar perfil
        </button>
        <button
          className="w-200 h-10 rounded-2xl bg-TertiaryDark text-White"
          onClick={handleChangePassword}
        >
          Cambiar contraseña
        </button>
      </div>
    </section>
  );
}

export default UserProfileInformation;
