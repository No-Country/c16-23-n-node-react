import Carousel from "../../components/shared/Carrousel";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import pets from "../../data/pets.json";
import { useParams } from "react-router-dom";

function PetInformationPage() {
  const { id } = useParams();

  const pet = pets[id - 1];

  const images = [pet.photo01, pet.photo02];

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <h1 className="px-5 pt-5 text-2xl font-semibold">{pet.name}</h1>
        <div className="mx-5 mb-8 p-5">
          <Carousel images={images} />
        </div>
        <article className="flex flex-col gap-5 px-5">
          <div className="flex justify-center gap-3">
            <span className="rounded-lg border border-black bg-White px-2 font-medium">
              {pet.size}
            </span>
            <span className="rounded-lg border border-black bg-White px-2 font-medium">
              {pet.gender}
            </span>
            <span className="rounded-lg border border-black bg-White px-2 font-medium">
              {pet.kind}
            </span>
          </div>
          <p className="text-base font-normal">{pet.description}</p>
          <div className="flex flex-col">
            <span className="text-base font-semibold">
              Refugio en que se encuentra:
            </span>
            <span className="text-base font-normal">{pet.shelter}</span>
          </div>
          <div className="text-center">
            <button className="mb-9 mt-3 h-10 w-180 rounded-2xl bg-Tertiary text-White">
              Iniciar Adopción
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default PetInformationPage;
