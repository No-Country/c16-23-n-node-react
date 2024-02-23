import FotoPerro from "/img/pets/fotoPerro.jpg";
import FotoGato from "/img/pets/fotoGato.jpg";
import PetCard from "../../components/HomePage/PetCard";
import Carousel from "../../components/HomePage/Carrousel";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Dropdown from "../../components/HomePage/Dropdown";
import pets from "../../data/pets.json";

function HomePage() {

  const images = [FotoPerro, FotoGato];

  return (
    <>
      <Navbar />
      <div className="select-none bg-Primary p-5">
        <div className="mx-5 mb-8">
          <Carousel images={images} />
        </div>

        <h1 className="my-5 font-poppins text-2xl font-bold">
          ¡Encuentra tu mascota ideal!
        </h1>
        <div className="mb-4 flex flex-wrap justify-between">
          <Dropdown title={"Especie"} options={["Perro", "Gato"]} />
          <Dropdown title={"Tamaño"} options={["Chico", "Grande"]} />
          <Dropdown title={"Genero"} options={["Macho", "Hembra"]} />
          <Dropdown title={"Actitud"} options={["Tranquilo", "Jugueton"]} />
        </div>

        <main className="flex flex-wrap">
          {pets.map((pet, index) => (
            <div key={index} className="w-1/2">
              <PetCard pet={pet} />
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
