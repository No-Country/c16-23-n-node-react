import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import PetCardComponent from "../../components/PetCardComponent";
import pets from "../../data/pets.json";
import Plus from "/img/shelters/plus.svg";
import Pen from "/img/others/pen-solid.svg";
import Trash from "/img/others/trash-solid.svg";
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
                <div className="flex justify-between ">
                  <button
                    className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-xs text-White"
                    onClick={handleButtonDelete}
                  >
                    <span className="flex items-center justify-center w-1/2">
                      <img
                        src={Trash}
                        alt="Icono Papelera de Borrar"
                        width={25}
                      />
                    Borrar
                    </span>
                  </button>
                  <button
                    className="rounded-full bg-Tertiary px-3 font-poppins text-xs text-White"
                    onClick={handleButtonEdite}
                  >
                    <span className="flex items-center justify-center w-1/2 c-white  ">
                      <img src={Pen} className="text-white" alt="Icono lapíz" width={25} />
                      Editar
                    </span>
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
