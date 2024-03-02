import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import Carousel from "../../components/shared/Carrousel";
import { useNavigate } from "react-router-dom";
import pet1 from "/img/pets/firulais.jpg";
import pet2 from "/img/pets/fotoGato.jpg";
import pet3 from "/img/pets/fotoPerro.jpg";

function PetPreview() {
  const images = [pet1, pet2, pet3];
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/NewPet`);
  };
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <div className="mx-5 mb-2 p-5">
          <Carousel images={images} />
        </div>
        <div className="mx-5 flex justify-around">
          <div>Mediano</div>
          <div>Macho</div>
          <div>Guardian</div>
        </div>
        <div className="font mx-5 mt-8 flex justify-around">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At qui esse
          laboriosam dignissimos molestiae dolorem quas error inventore. Minima
          corporis aliquam natus ipsum facere nulla voluptate temporibus
          molestias neque accusamus!
        </div>
        <div className="mb-2 pt-8 flex justify-center">
          <button
            className="my-1 w-1/2 rounded-2xl bg-TertiaryDark p-2 text-lg text-white"
            onClick={handleNavigation}
          >
            Editar
          </button>
        </div>
        <div className="pb-8 flex justify-center">
          <button className="my-1 w-1/2 rounded-2xl bg-Tertiary p-2 text-lg text-white">
            Guardar Cambios
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default PetPreview;
