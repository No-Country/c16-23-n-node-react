import { useNavigate } from "react-router-dom";


function ShelterProfileInformationPage() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/ShelterProfileInformation");
  };

  const handleChangePassword = () => {
    navigate("/ShelterPassword");
  };

  return (
    <section className="h-600 flex flex-col justify-start gap-3 px-8 py-4 font-poppins">
      <span className="text-base font-semibold">Nombre del Refugio</span>
      <span>Patitas Felices</span>
      <span className="text-base font-semibold">Responsable</span>
      <span>Javier Rodríguez</span>
      <span className="text-base font-semibold">Correo</span>
      <span>example@gmail.com</span>
      <span className="text-base font-semibold">Descripción</span>
      <span>Un hogar amoroso para animales desamparados, donde reciben cuidados, atención médica
        y la oportunidad de encontrar un nuevo hogar lleno de cariño.
      </span>
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

export default ShelterProfileInformationPage;
