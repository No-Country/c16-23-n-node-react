import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
// import Carousel from "../../components/shared/Carrousel";
import usePets from "../../hooks/usePets";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import pet1 from "/img/pets/firulais.jpg";
// import pet2 from "/img/pets/fotoGato.jpg";
// import pet3 from "/img/pets/fotoPerro.jpg";
import { PetContext } from "../../context/PetContext";


function PetPreview() {
  const { createPet } = usePets();

  const { petData, updatePetData } = useContext(PetContext);
  // const images = [pet1, pet2, pet3];
  console.log(petData)
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/NewPet`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPet(petData);
      updatePetData(petData);
      navigate(`/NewPet`);
    } catch (error) {
      console.error("Error updating pet data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-xl p-5">
      <div className="flex justify-center pb-10">
          <img src={petData.image} alt="Pet Preview" width={150} />
          </div>
        <div className="mx-5 flex justify-around">
          <div>{petData.size}</div>
          <div>{petData.gender}</div>
          <div>{petData.characteristics}</div>
        </div>
        <div className="font mx-5 mt-8 flex justify-around">
          {petData.description}
        </div>
        <div className="mb-2 flex justify-center pt-8">
          <button
            className="my-1 w-1/2 rounded-2xl bg-TertiaryDark p-2 text-lg text-white"
            onClick={handleNavigation}
          >
            Editar
          </button>
        </div>
        <div className="flex justify-center pb-8">
          <button  className="my-1 w-1/2 rounded-2xl bg-Tertiary p-2 text-lg text-white">
            Guardar Cambios
          </button>
        </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
export default PetPreview;
