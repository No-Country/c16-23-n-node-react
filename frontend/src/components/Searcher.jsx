import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searcher = () => {
  return (
    <section className="">
      <article className="w-360 h-160 rounded-2xl flex flex-col justify-center items-center py-8 px-4">
        <div className="bg-Secondary w-328 h-104 rounded-2xl p-4">
          <h3 className="text-2xl text-White flex items-center justify-center font-normal text-center">
            ¿Tienes un refugio? Registrate aquí
          </h3>
        </div>
      </article>

      <article className="w-360 h-120 flex items-center align-center justify-between pt-8 pb-4 px-4">
        <div className="w-328 h-72 leading-9">
          <h2 className="text-2xl text-center font-medium">
            Explora nuestros refugios colaboradores disponibles
          </h2>
        </div>
      </article>

      <article className="w-360 h-72 flex items-center p-4 relative">
        <input
          className="text-lg h-10 w-328 rounded-32 px-4 outline-none border-0 shadow-input"
          type="text"
          placeholder="Search..."
        />
        <MagnifyingGlassIcon className="h-8 w-8 text-GrayDark absolute right-8 top-5" />
      </article>
    </section>
  );
};

export default Searcher;
