import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import PetCardComponent from "../../components/HomePage/PetCardRefined";
// import pets from "../../data/pets.json";
import Plus from "/img/others/plus.svg";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usePets from "../../hooks/usePets";

function PetDashboard() {
  const { petInfo: pets, getPetInfo: getAllPets, deletePetById } = usePets();

  useEffect(() => {
    getAllPets("/pet");
  }, []);
  console.log(pets);

  const navigate = useNavigate();
  const handleButtonDelete = async (id, name) => {
    try {
      const confirmDelete = window.confirm(
        `Seguro que desean eliminar a ${name}?`,
      );
      if (confirmDelete) {
        await deletePetById(id);
        getAllPets("/pet");
      }
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  function handleButtonEdite() {
    alert("Próximamente se Editarás a Firuly");
  }
  const handleNavigation = () => {
    navigate(`/NewPet`);
  };
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <strong className="mb-10 ml-5 block pt-5 text-left text-2xl font-bold leading-normal">
          Tus Mascotas
        </strong>
        <section className="m-5 flex flex-wrap">
          <div
            className="flex w-1/2 items-center justify-center rounded-xl bg-Tertiary"
            onClick={handleNavigation}
          >
            <span className="mx-2">
              <img src={Plus} alt="Add Pet" />
            </span>
          </div>
          {pets.map((pet, index) => (
            <div key={index} className="w-1/2">
              <PetCardComponent pet={pet}>
                <button
                  className="rounded-full bg-Alert px-3 py-1 font-poppins text-White"
                  onClick={() => handleButtonDelete(pet._id, pet.name)}
                >
                  <TrashIcon className="mr-2 h-5 w-8" />
                </button>
                <button
                  className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
                  onClick={handleButtonEdite}
                >
                  Editar
                </button>
              </PetCardComponent>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PetDashboard;
