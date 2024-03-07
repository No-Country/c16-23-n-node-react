import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import PetCardComponent from "../../components/HomePage/PetCardRefined";
import Plus from "/img/others/plus.svg";
import Pencil from "/img/others/pencil.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usePets from "../../hooks/usePets";

function PetDashboard() {
  const {
    petInfo: pets,
    getPetInfo: getAllPets,
    updateAdoptionStatus,
  } = usePets();

  useEffect(() => {
    getAllPets("/pet");
  }, []);

  const navigate = useNavigate();
  const handleAdoptionStatus = async (id, adoption_status, name) => {
    try {
      const confirmStatusAdoption = window.confirm(
        `Confirmar que ${name} ha sido adoptado?`,
      );
      if (confirmStatusAdoption) {
        await updateAdoptionStatus(id);
        alert("Estado Cambiado! 😎");
        getAllPets("/pet");
      }
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  function handleButtonEdit() {
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
        <section className="mx-5 flex flex-wrap pb-10">
          <div
            className="flex w-1/2 items-center justify-center rounded-xl bg-Tertiary"
            onClick={handleNavigation}
          >
            <span className="mx-2">
              <img src={Plus} alt="Add Pet" />
            </span>
          </div>
          {pets.length === 0 ? (
            <div className="w-full py-40 text-center ">
              <p>No hay mascotas. Agrega una nueva mascota.</p>
            </div>
          ) : (
            <>
              {pets.map((pet, index) => (
                <div key={index} className="w-1/2">
                  <PetCardComponent pet={pet}>
                    <button
                      className="rounded-full bg-Alert px-3 py-1 font-poppins text-xs text-White"
                      onClick={() =>
                        handleAdoptionStatus(
                          pet._id,
                          pet.adoption_status,
                          pet.name,
                        )
                      }
                    >
                      Adoptad@
                    </button>
                    <button
                      className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
                      onClick={handleButtonEdit}
                    >
                      <img src={Pencil} alt="Edit Pet" />
                    </button>
                  </PetCardComponent>
                </div>
              ))}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PetDashboard;
