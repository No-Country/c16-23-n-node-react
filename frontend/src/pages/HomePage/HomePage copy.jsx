import FotoPerro from "/img/pets/fotoPerro.jpg";
import FotoGato from "/img/pets/fotoGato.jpg";
import PetCard from "../../components/HomePage/PetCard";
import Carousel from "../../components/shared/Carrousel";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Dropdown from "../../components/HomePage/Dropdown";
// import pets from "../../data/pets.json";
import usePet from "../../hooks/usePet";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function HomePage() {
  const images = [FotoPerro, FotoGato];
  const [pets, getAllPets] = usePet();
  const [species, setSpecies] = useState(null);
  const [size, setSize] = useState(null);
  const [gender, setGender] = useState(null);
  const [attitude, setAttitude] = useState(null);

  useEffect(() => {
    getAllPets(`/pet`);
  }, []);

  useEffect(() => {
    const fetchPetsByFilters = async () => {
      let url = "/pet";

      // Construir la URL de la API con los filtros aplicados
      if (species || size || gender || attitude) {
        url += "/byFilters?";
        if (species) url += `pet_type=${species}&`;
        if (size) url += `size=${size}&`;
        if (gender) url += `gender=${gender}&`;
        if (attitude) url += `characteristics=${attitude}&`;
      }

      // Eliminar el último '&' de la URL, si existe
      url = url.replace(/&$/, "");

      // Hacer la solicitud a la API
      getAllPets(url);
    };

    fetchPetsByFilters();
  }, [species, size, gender, attitude]);

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary p-5 pt-16">
        <div className="mx-auto 2xl:w-1440">
          <div className="mx-5 mb-8">
            <Carousel images={images} />
          </div>

          <h1 className="my-5 font-poppins text-2xl font-bold 2xl:text-6xl">
            ¡Encuentra tu mascota ideal!
          </h1>
          <div className="mb-4 flex flex-wrap justify-between 2xl:px-16 2xl:py-24">
            <Dropdown
              title={"Especie"}
              options={["Perro", "Gato"]}
              className="2xl:w-288"
              onSelect={setSpecies}
            />
            <Dropdown
              title={"Tamaño"}
              options={["Pequeño", "Mediano", "Grande"]}
              className="2xl:w-288"
              onSelect={setSize}
            />
            <Dropdown
              title={"Genero"}
              options={["Macho", "Hembra"]}
              className="2xl:w-288"
              onSelect={setGender}
            />
            <Dropdown
              title={"Actitud"}
              options={["Tranquilo", "Jugueton", "Cariñoso"]}
              className="2xl:w-288"
              onSelect={setAttitude}
            />
          </div>

          <section className="flex flex-wrap">
            {pets?.map((pet, index) => (
              <div key={index} className="w-1/2">
                <PetCard pet={pet} />
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
