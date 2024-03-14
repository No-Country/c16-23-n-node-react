import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Carousel from "../../components/shared/Carrousel";
import ImageDefault from "/img/others/addNew.svg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import usePets from "../../hooks/usePets";
import { PetContext } from "../../context/PetContext";
import { AuthContext } from "../../context/AuthContext";
import InfoModal from "../../modals/InfoModal";
import PetDeleteModal from "../../modals/PetDeleteModal/PetDeleteModal";

function UpdatePetPage() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { updatePet, deletePet } = usePets();
  const { setPetData, petData } = useContext(PetContext);
  // const [showModal, setShowModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [petName, setPetName] = useState("");
  const navigate = useNavigate();

  // Obtener los datos del localStorage
  const storedData = localStorage.getItem("formUpdate");
  // Intenta parsear los datos como JSON
  const petUpdate = JSON.parse(storedData);
  // Ahora puedes acceder a los datos individualmente
  const {
    _id: id,
    description,
    gender,
    images: pets,
    name,
    pet_type,
    size,
    age,
    characteristics,
  } = petUpdate;

  // const blobUrls = pets.map((item) => item.url);

  useEffect(() => {
    // Guardar en localStorage cada vez que petData cambie
    // petData.description = description;
    // petData.gender = gender;
    // petData.name = name;
    // petData.pet_type = pet_type;
    // petData.size = size;
    // petData.age = age;
    // petData.characteristics = characteristics;
    petData.images = pets;
    localStorage.setItem("formUpdate", JSON.stringify(petData));
    console.log(petUpdate);
  }, [petData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // localStorage.setItem("formUpdate", JSON.stringify(petData));
  };

  const closeModal = () => {
    setShowModal(false);
    // navigate("/newpet");
    navigate("/petdashboard");
  };

  async function handlePetDelete() {
    if (!id) return;

    try {
      setShowModal(true);
      await deletePet(id);
      // localStorage.removeItem("formUpdate");
      // location.reload(); // Recargar la página para reflejar los cambios
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  }

  const handleNavigation = () => {
    // const petDataWithImages = {
    //   ...petData,
    //   images: urls,
    //   shelter_id: shelter_id,
    // };
    // localStorage.setItem("formPreview", JSON.stringify(petDataWithImages));
    // setPetData(petDataWithImages);
    // petUpdate.description = data.description;
    // petUpdate.gender = data.gender;
    // petUpdate.name = data.name;
    // petUpdate.pet_type = data.pet_type;
    // petUpdate.size = data.size;
    // petUpdate.age = data.age;
    // petUpdate.characteristics = data.characteristics;
    // localStorage.setItem("formUpdate", JSON.stringify(petUpdate));

    navigate(`/petPreview`);
  };

  async function submit(data) {
    try {
      await updatePet(id, data);
      petUpdate.description = data.description;
      petUpdate.gender = data.gender;
      petUpdate.name = data.name;
      petUpdate.pet_type = data.pet_type;
      petUpdate.size = data.size;
      petUpdate.age = data.age;
      petUpdate.characteristics = data.characteristics;
      localStorage.setItem("formUpdate", JSON.stringify(petUpdate));
      setShowModal(true);
      setPetName(data.name);
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  }

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <strong className="ml-5 block pt-5 text-left text-2xl font-bold leading-normal">
          Edita tu mascota
        </strong>
        <form
          onSubmit={handleSubmit(submit)}
          id="submitButton"
          className="w-full max-w-md rounded-xl p-5 pb-0"
        >
          <div className="mx-5 mb-5 p-5">
            {pets.length > 0 ? (
              <Carousel images={pets} />
            ) : (
              <p>No hay imágenes disponibles</p>
            )}
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="email">
              Nombre de la Mascota
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("name", { required: true, maxLength: 20 })}
              type="text"
              id="name"
              name="name"
              placeholder="Conexión Huellitas"
              defaultValue={name} // Usa defaultValue en lugar de value
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="email">
              Edad
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("age", { required: true })}
              type="number"
              id="age"
              name="age"
              placeholder="Conexión Huellitas"
              defaultValue={age} // Usa defaultValue en lugar de value
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <select
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("pet_type", { required: true })}
              id="pet_type"
              name="pet_type"
              defaultValue={pet_type}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Elige una especie
              </option>
              <option value="Gato">Gato</option>
              <option value="Perro">Perro</option>
            </select>
          </div>
          <div className="mb-5">
            <select
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("size", { required: true })}
              id="size"
              name="size"
              defaultValue={size}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Selecciona su Tamaño
              </option>
              <option value="Pequeño">Pequeño</option>
              <option value="Mediano">Mediano</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
          <div className="mb-5">
            <select
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("gender", { required: true })}
              id="gender"
              name="gender"
              defaultValue={gender}
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Selecciona su Genero
              </option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>
          <div className="mb-5">
            <select
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              {...register("characteristics", { required: true })}
              id="characteristics"
              defaultValue={Array.isArray(characteristics)}
              name="characteristics"
              onChange={handleInputChange}
            >
              <option value="" disabled hidden>
                Comportamiento
              </option>
              <option value="Calmado">Calmado</option>
              <option value="Jugueton">Jugueton</option>
              <option value="Alegre">Alegre</option>
              <option value="Tranquilo">Tranquilo</option>
              <option value="Cariñoso">Cariñoso</option>
              <option value="Guardian">Guardian</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              className="mb-3 block text-lg font-semibold"
              htmlFor="description"
            >
              Descripción
            </label>
            <textarea
              className="mt-1 h-40 w-full rounded-3xl bg-White px-3 py-5 shadow-xl outline-none"
              {...register("description", { required: true })}
              type="textarea"
              id="description"
              name="description"
              defaultValue={description}
              placeholder="Cuéntanos un poco más sobre la mascota, condiciones especiales y en qué estado fue encontrado"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2 flex justify-center">
            <button
              className="my-1 w-180 rounded-2xl bg-Tertiary p-2 text-lg text-white"
              onClick={handleSubmit}
            >
              Guardar Cambios
            </button>
          </div>
        </form>
        <div className="mb-2 flex justify-center">
          <button
            className="my-1 w-180 rounded-2xl bg-TertiaryDark p-2 text-lg text-white"
            onClick={handleNavigation}
          >
            Vista Previa
          </button>
        </div>
        <div className="flex justify-center pb-10">
          <button
            className="my-1 w-180 rounded-2xl bg-Alert p-2 text-lg text-white"
            onClick={handlePetDelete}
            id="deleteButton"
          >
            Eliminar Mascota
          </button>
        </div>
        {/* Modal */}
        {showModal && (
          <InfoModal
            title="Registro Actualizado"
            content={<p>{`${petName} ha sido actualizado/a correctamente!`}</p>}
            isOpen={showModal}
            handleClose={closeModal}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default UpdatePetPage;
