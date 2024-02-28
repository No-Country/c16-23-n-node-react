import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function UserProfileInformation() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/updateUserInformation");
  };

  const handleChangePassword = () => {
    navigate("/updateUserPassword");
  };

  const { userData, setUserData } = useContext(UserContext);

  return (
    <section className="flex h-400 flex-col justify-start gap-3 px-8 py-4 font-poppins">
      <span className="text-base font-semibold">Nombre</span>
      <span>{userData.username}</span>
      <span className="text-base font-semibold">Correo</span>
      <span>{userData.email}</span>
      <span className="text-base font-semibold">Número de teléfono</span>
      <span className="italic">{userData.phoneNumber}</span>
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <button
          className="h-10 w-200 rounded-2xl bg-Tertiary text-White"
          onClick={handleEditProfile}
        >
          Editar perfil
        </button>
        <button
          className="h-10 w-200 rounded-2xl bg-TertiaryDark text-White"
          onClick={handleChangePassword}
        >
          Cambiar contraseña
        </button>
      </div>
    </section>
  );
}

export default UserProfileInformation;
