import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import PetCardComponent from "../../components/HomePage/PetCardRefined";
import uploadImages from "/img/pets/uploadImages.svg";
import Pencil from "/img/others/pencil.svg";
import Trash from "/img/others/trash.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import usePets from "../../hooks/usePets";
import { PetContext } from "../../context/PetContext";
import PetDeleteModal from "../../modals/PetDeleteModal/PetDeleteModal";

function PetDashboard() {
  const { setPetData, petData, updatePetData } = useContext(PetContext);
  const [showModal, setShowModal] = useState(false);
  const [petId, setPetId] = useState(null);
  const {
    petInfo: pets,
    getPetInfo: getAllPets,
    updateAdoptionStatus,
    deletePet,
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
        await updateAdoptionStatus(id, adoption_status);
        alert("Estado Cambiado! 😎");
        getAllPets("/pet");
      }
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };

  function handleButtonDelete(id) {
    setPetId(id);
    setShowModal(true);
  }

  async function handleButtonEdit(pet) {
    const blobUrls = pet.images.map((item) => item.url);

    const petDataWithImages = {
      ...pet,
      images: blobUrls,
    };

    localStorage.setItem("formUpdate", JSON.stringify(petDataWithImages));
    setPetData(pet);
    navigate(`/updatePet`);
  }

  async function handlePetDelete() {
    if (!petId) return;

    try {
      await deletePet(petId);
      setShowModal(false);
      location.reload();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  }

  const handleNavigation = () => {
    navigate(`/newpet`);
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
            className="flex w-1/2 cursor-pointer items-center justify-center rounded-xl"
            onClick={handleNavigation}
          >
            <span className="mx-2">
              <img
                src={uploadImages}
                alt="Add Pet"
                className="h-56 w-44 rounded-lg object-cover"
              />
            </span>
          </div>
          {!Array.isArray(pets) ||
          pets.length === 0 ||
          pets.every((pet) => pet.adoption_status) ? (
            <div className="w-full py-40 text-center ">
              <p>No hay mascotas. Agrega una nueva mascota.</p>
            </div>
          ) : (
            <>
              {pets
                .filter((pet) => !pet.adoption_status)
                .map((pet, index) => (
                  <div key={index} className="w-1/2">
                    <PetCardComponent pet={pet}>
                      <button
                        className="rounded-lg bg-Alert p-3 font-poppins text-xs text-White"
                        onClick={() => handleButtonDelete(pet._id)}
                      >
                        <img src={Trash} alt="Delete Pet" className="h-6 w-6" />
                      </button>
                      <button
                        className="rounded-lg bg-Tertiary p-3 font-poppins text-White"
                        onClick={() => handleButtonEdit(pet)}
                      >
                        <img src={Pencil} alt="Edit Pet" className="h-6 w-6" />
                      </button>
                    </PetCardComponent>
                  </div>
                ))}
            </>
          )}
        </section>
        {/* Modal */}
        {showModal && (
          <PetDeleteModal
            setShowModal={setShowModal}
            handlePetDelete={handlePetDelete}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default PetDashboard;
