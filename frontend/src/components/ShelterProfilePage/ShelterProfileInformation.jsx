import { useNavigate } from "react-router-dom";
import ShelterProfileDefault from "/img/shelters/shelterProfileDefault.svg";
import { useState } from "react";

function ShelterProfileInformation() {
  const [imageProfile, setImageProfile] = useState([]);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageProfile(files);
  };

  const handleEditProfile = () => {
    navigate("/shelterProfileUpdate");
    console.log(imageProfile)
  };

  const handleChangePassword = () => {
    navigate("/ShelterPassword");
  };

  return (

    <main className="select-none bg-Primary pt-16 font-poppins text-black">

      <div className="flex justify-center">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="galleryInput"
          onChange={handleImageChange}
        />

        <label htmlFor="galleryInput" className="cursor-pointer">
          <img src={ShelterProfileDefault} alt="Logo Profile" className="" />
        </label>
      </div>

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
    </main>
  );
}

export default ShelterProfileInformation;
