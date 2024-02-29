import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import PetCardComponent from "../..//components/HomePage/ComponentPrueba";
import pets from "../../data/pets.json";
import Plus from "/img/shelter/plus.svg";
import { useNavigate } from "react-router-dom";

function ShelterDashboard() {
  const navigate = useNavigate();
  function handleButtonDelete() {
    alert("Próximamente se Borrará Firuly");
  }

  function handleButtonEdite() {
    alert("Próximamente se Editarás a Firuly");
  }
  const handleNavigation = () => {
    navigate(`/NewPet`);
  };
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <strong className="mb-10 ml-5 block pt-5 text-left text-2xl font-bold leading-normal">
          Tus Mascotas
        </strong>
        <section className="m-5 flex flex-wrap">
          <div
            className="flex w-1/2 items-center justify-center rounded-xl bg-Tertiary"
            onClick={handleNavigation}
          >
            <span className="mx-2">
              <img src={Plus} alt="Add Pet" />
            </span>
          </div>
          {pets.map((pet, index) => (
            <div key={index} className="w-1/2">
              <PetCardComponent pet={pet}>
                <div className="flex w-1/2">
                <div>
                <button
                  className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
                  onClick={handleButtonDelete}
                >
                  Borrar
                </button>
                </div>
                <button
                  className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
                  onClick={handleButtonEdite}
                >
                  Editar
                </button>
                </div>
              </PetCardComponent>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ShelterDashboard;
