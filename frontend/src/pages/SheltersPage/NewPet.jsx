import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer"
import ImageDefault from "/img/shelters/AddNewPet.svg";
import { useState } from "react";
function NewPet() {
    const [images, setImages] = useState([]);
    // 1. Agregar onChange function 
    // 2. Handle each input inside onChange function 
    // 3. setNewDataPet 
    // 4. Pass NewDataPet into submit function
    const [dataNewPet, setDataNewPet] = useState({
        name: name, 
    })


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
      };
  function handleSubmit(e) {
    e.preventDefault(); 
    console.log(images[0].name);
}
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <strong className="mb-10 ml-5 block pt-5 text-left text-2xl font-bold leading-normal">
          Agregar una mascota
        </strong>
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
            <img src={ImageDefault} alt="Add Pet"/>
          </label>
        </div>
        <form className="w-full max-w-md rounded-xl p-6 m-5">
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold" htmlFor="email">
              Nombre de la Mascota
            </label>
            <input
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              type="text"
              id="text"
              placeholder="Conexión Huellitas"
            />
          </div>
          <div className="mb-5">
            <select
              className="mt-1 block w-full rounded-3xl bg-White px-4 py-3 shadow-xl outline-none"
              id="petName"
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
            >
              <option value="" disabled hidden>
                Selecciona su Genero
              </option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-lg font-semibold">
              Características de la Mascota
            </label>
            <div className="flex flex-wrap">
              <label className="mb-2 mr-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-5 w-5"
                  name="characteristics"
                  value="kind"
                />
                <span className="ml-2">Calmado</span>
              </label>
              <label className="mb-2 mr-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-5 w-5"
                  name="characteristics"
                  value="happy"
                />
                <span className="ml-2">Jugueton</span>
              </label>
              <label className="mb-2 mr-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-5 w-5"
                  name="characteristics"
                  value="sad"
                />
                <span className="ml-2">Alegre</span>
              </label>
              <label className="mb-2 mr-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-5 w-5"
                  name="characteristics"
                  value="sad"
                />
                <span className="ml-2">Tranquilo</span>
              </label>
              <label className="mb-2 mr-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-5 w-5"
                  name="characteristics"
                  value="sad"
                />
                <span className="ml-2">Cariñoso</span>
              </label>
              <label className="mb-2 mr-4 inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-5 w-5"
                  name="characteristics"
                  value="sad"
                />
                <span className="ml-2">Guardian</span>
              </label>
            </div>
          </div><button onClick={handleSubmit}>Ver Images</button>
        </form>
        <Footer/>
      </main>
    </>
  );
}

export default NewPet;
