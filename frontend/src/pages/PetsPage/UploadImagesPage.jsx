import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import uploadImages from "/img/pets/uploadImages.svg";
import { PetContext } from "../../context/PetContext";

function UploadImagesPage() {
  const [imagenes, setImagenes] = useState([]);
  const { setPetData } = useContext(PetContext);

  const navigate = useNavigate();

  const handleImagenCargada = (event) => {
    const files = event.target.files;
    // Verificar la cantidad actual de imágenes cargadas
    const imagenesActuales = imagenes.length;
    // Calcular cuántas imágenes se pueden agregar
    const espacioDisponible = 3 - imagenesActuales;
    // Obtener solo las imágenes que se pueden agregar según el espacio disponible
    const nuevasImagenes = Array.from(files).slice(0, espacioDisponible);

    // Convertir las imágenes a URL y agregarlas al estado
    const nuevasURLs = nuevasImagenes.map((file) => URL.createObjectURL(file));
    const nuevasImagenesGuardadas = [...imagenes, ...nuevasURLs];
    setImagenes(nuevasImagenesGuardadas);

    // Si se intentan agregar más imágenes de las permitidas, enviar un mensaje por console.log()
    if (files.length > espacioDisponible) {
      console.log("¡Solo se permiten cargar hasta 3 imágenes!");
    } else {
      setPetData((prevData) => ({
        ...prevData,
        images: nuevasImagenes,
        imagePreview: nuevasURLs[0],
      }));
    }
  };

  const handleUploadImages = () => {
    navigate("/newpet");
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <strong className="mb-10 ml-5 block pt-5 text-left text-2xl font-bold leading-normal">
          Tus Fotos
        </strong>
        <div className="mx-10 mb-8 grid grid-cols-2 gap-4">
          <input
            type="file"
            id="galleryInput4"
            accept="image/*"
            multiple
            onChange={handleImagenCargada}
            className="hidden"
          />
          <label htmlFor="galleryInput4" className="cursor-pointer">
            <img
              src={uploadImages}
              alt="Add Pet"
              className="h-36 w-36 rounded-lg object-cover"
            />
          </label>
          {imagenes.map((imagen, index) => (
            <div key={index} className="h-36 w-36 overflow-hidden rounded-lg">
              <img
                src={imagen}
                alt={`Imagen ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-5">
          <button
            className="my-1 w-1/2 rounded-2xl bg-Tertiary p-2 text-lg text-white"
            onClick={handleUploadImages}
          >
            Guardar Imágenes
          </button>
        </div>
        <div className="flex justify-center pb-5">
          <button
            className="my-1 w-1/2 rounded-2xl bg-Alert p-2 text-lg text-white"
          >
            Cancelar
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UploadImagesPage;