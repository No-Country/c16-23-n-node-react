import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import ImageDefault from "/img/others/addNew.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import usePets from "../../hooks/usePets";
import { PetContext } from "../../context/PetContext";

function NewPet() {
  const { createPet } = usePets();
  const { setPetData, petData, updatePetData } = useContext(PetContext);

  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   age: "",
  //   pet_type: "",
  //   size: "",
  //   gender: "",
  //   characteristics: "",
  //   description: "",
  // });
  // const [images, setImages] = useState([]);
  // const [imagePreview, setImagePreview] = useState(null);

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const selectedImage = files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImagePreview(imageUrl);
    setPetData((prevData) => ({
      ...prevData,
      image: imageUrl,
    }));
  };

  

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/PetPreview`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const petDataWithImages = { ...petData, images };
      await createPet(petDataWithImages);
      updatePetData(petDataWithImages);
      navigate("/PetDashboard");
    } catch (error) {
      console.error("Error creating pet:", error);
    }
  };
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <strong className="mb-10 ml-5 block pt-5 text-left text-2xl font-bold leading-normal">
          Agregar una mascota
        </strong>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-xl p-5">
        <div className="flex justify-center">
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            id="galleryInput"
            onChange={handleImageChange}
          />
          <label htmlFor="galleryInput" className="cursor-pointer">
            {imagePreview ? (
              <img src={imagePreview} alt="Pet Preview" width={150} />
            ) : (
              <img src={ImageDefault} alt="Add Pet" />
            )}
          </label>
        </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="email">
              Nombre de la Mascota
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              type="text"
              id="text"
              name="name"
              placeholder="Conexión Huellitas"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="email">
              Edad
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              type="number"
              id="text"
              name="age"
              placeholder="Conexión Huellitas"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <select
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              id="petName"
              name="pet_type"
              defaultValue=""
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
              id="petName"
              name="size"
              defaultValue=""
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
              id="petName"
              name="gender"
              defaultValue=""
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
              id="petName"
              defaultValue=""
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
              type="textare"
              id="description"
              name="description"
              placeholder="Cuéntanos un poco más sobre la mascota, condiciones especiales y en qué estado fue encontrado"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2 flex justify-center">
            <button
              className="my-1 w-1/2 rounded-2xl bg-Tertiary p-2 text-lg text-white"
              onClick={handleSubmit}
            >
              Guardar Cambios
            </button>
          </div>
          <div className="mb-5 flex justify-center">
            <button
              className="my-1 w-1/2 rounded-2xl bg-TertiaryDark p-2 text-lg text-white"
              onClick={handleNavigation}
            >
              Vista Previa
            </button>
          </div>
        </form>
        <Footer />
      </main>
    </>
  );
}

export default NewPet;
