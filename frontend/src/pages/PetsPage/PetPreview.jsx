import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Carousel from "../../components/shared/Carrousel";
import usePets from "../../hooks/usePets";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function PetPreview() {
  const { updatePet } = usePets();
  const { name: shelter } = useContext(AuthContext);
  // Intenta obtener los datos del localStorage
  // Intenta parsear los datos como JSON
  const storedData =
    localStorage.getItem("formPreview") || localStorage.getItem("formUpdate");
  const petData = JSON.parse(storedData);
  // Ahora puedes acceder a los datos individualmente
  const {
    _id,
    description,
    gender,
    images: pets,
    name: pet,
    pet_type,
    size,
  } = petData;

  // const blobUrls = pets.map((item) => item.url);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/updatePet`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePet(_id, petData);
      navigate(`/petdashboard`);
    } catch (error) {
      console.error("Error updating pet data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <h1 className="px-5 pt-5 text-2xl font-semibold">{pet}</h1>
        <div className="mx-5 p-5">
          {pets.length > 0 ? (
            <Carousel images={pets} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-xl p-5 pb-0"
        >
          <article className="flex flex-col gap-5 px-5">
            <div className="flex justify-center gap-3">
              <span className="rounded-lg border border-black bg-White px-2 font-medium">
                {size}
              </span>
              <span className="rounded-lg border border-black bg-White px-2 font-medium">
                {gender}
              </span>
              <span className="rounded-lg border border-black bg-White px-2 font-medium">
                {pet_type}
              </span>
            </div>
            <p className="text-base font-normal">{description}</p>
            <div className="flex flex-col">
              <span className="text-base font-semibold">
                Refugio en que se encuentra:
              </span>
              <span className="mt-2 text-base font-normal">{shelter}</span>
            </div>
            <div className="mb-2 flex justify-center">
              <button className="my-1 w-180 rounded-2xl bg-Tertiary p-2 text-lg text-white">
                Guardar Cambios
              </button>
            </div>
          </article>
        </form>
        <div className="flex justify-center pb-10">
          <button
            className="my-1 w-180 rounded-2xl bg-TertiaryDark p-2 text-lg text-white"
            onClick={handleNavigation}
          >
            Volver a editar
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default PetPreview;
