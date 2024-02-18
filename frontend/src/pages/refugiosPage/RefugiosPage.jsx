import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./../../css/tailwind.css";

//Componente RefugiosPage
const RefugiosPage = () => {
  return (
    <>
      <NavBar />

      {/* Main Inicia */}
      <main className="bg-primary">
        <section className="sm:bg-primary sm:h-40 sm:flex sm:flex-col sm:justify-center sm:items-center ">
          <div className="sm:bg-tertiary  sm:h-104 sm:w-328 sm:flex items-center sm:align-center sm:justify-center sm:rounded-2xl sm:p-4 sm:gap-2.5">
            <h3 className="sm:text-white sm:flex sm:items-center sm:justify-center sm:font-normal sm:font-poppins sm:text-center sm:text-sm">
              ¿Tienes un refugio? Registrate aquí
            </h3>
          </div>
        </section>

        <section className="sm:bg-primary sm:h-104 sm:flex items-center sm:align-center sm:justify-between sm:pt-4 sm:pb-4 sm:px-4 sm:text-lg">
          <h2 className="sm:font-semibold sm:w-328 sm:h-72 sm:font-poppins sm:text-sm">
            Explora nuestros refugios colaboradores disponibles
          </h2>
        </section>

        <section className="sm:bg-primary sm:h-20 sm:flex items-center sm:align-center sm:justify-center">
          <input
            className="sm:h-10 sm:w-328 sm:rounded-32 sm:px-2"
            type="text"
            placeholder="Buscar..."
          />
          {/* <button>Search</button> */}
        </section>

        <section className="sm:bg-primary sm:h-740 sm:flex sm:flex-col sm:items-center sm:py-4 sm:gap-2.5">
          <div className="sm:bg-primaryDark sm:w-320 sm:h-220 sm:rounded-2xl sm:flex sm:flex-col sm:justify-between sm:p-4">
            <div className="sm:w-68">LOGO</div>
            <div>
              <p className=" sm:w-285 sm:font-poppins sm:font-medium">
                Un hogar amoroso para animales desamparados, donde reciben
                cuidados, atención médica y la oportunidad de encontrar un nuevo
                hogar lleno de cariño
              </p>
            </div>
            <div className="sm:flex sm:justify-between sm:w-285">
              <div className="sm:bg-tertiary sm:text-white sm:flex">
                <button>Saber más</button>
              </div>
              <div className="sm:bg-tertiary">
                <button className="sm:text-white">Donar</button>
              </div>
            </div>
          </div>
          <div className="sm:bg-primaryDark sm:w-320 sm:h-220 sm:rounded-2xl">
            CARD
          </div>
          <div className="sm:bg-primaryDark sm:w-320 sm:h-220 sm:rounded-2xl">
            CARD
          </div>
        </section>
      </main>
      {/* Main Termina */}

      {/* Footer Inicia */}
      {/* Revisar por que no se integra correctamente el footer */}
      {/* <Footer /> */}
      {/* Footer Termina */}
    </>
  );
};

export default RefugiosPage;
