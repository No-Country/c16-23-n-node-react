import FotoPerro from "/img/pets/fotoPerro.jpg";
import FotoGato from "/img/pets/fotoGato.jpg";
import PetCard from "../../components/HomePage/PetCard";
import Carousel from "../../components/shared/Carrousel";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Dropdown from "../../components/HomePage/Dropdown";
// import pets from "../../data/pets.json";
import usePet from "../../hooks/usePet";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function HomePage() {
  const images = [FotoPerro, FotoGato];
  const [pets, getAllPets] = usePet();

  useEffect(() => {
    getAllPets(`/pet`);
  }, []);

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary p-5 pt-16">
        <div className="2xl:w-1440 mx-auto">
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
            />
            <Dropdown
              title={"Tamaño"}
              options={["Chico", "Grande"]}
              className="2xl:w-288"
            />
            <Dropdown
              title={"Genero"}
              options={["Macho", "Hembra"]}
              className="2xl:w-288"
            />
            <Dropdown
              title={"Actitud"}
              options={["Tranquilo", "Jugueton"]}
              className="2xl:w-288"
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
