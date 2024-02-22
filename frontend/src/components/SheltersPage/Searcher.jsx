import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Searcher = () => {
  return (
    <section className="mx-auto">
      <article className="flex h-160 w-360 flex-col items-center justify-center rounded-2xl" >
        <div className="h-104 w-328 rounded-2xl bg-Secondary p-4">
          <h3 className="flex items-center justify-center text-center text-2xl font-normal text-White">
            ¿Tienes un refugio? Registrate aquí
          </h3>
        </div>
      </article>

      <article className="align-center flex h-120 w-360 items-center justify-between pb-4 pt-8">
        <div className="h-72 w-328 leading-9">
          <h2 className="text-center text-2xl font-medium">
            Explora nuestros refugios colaboradores disponibles
          </h2>
        </div>
      </article>

      <article className="relative flex h-72 w-360 items-center p-4">
        <input
          className="h-10 w-328 rounded-32 border-0 px-4 text-lg shadow-input outline-none"
          type="text"
          placeholder="Search..."
        />
        <MagnifyingGlassIcon className="absolute right-8 top-5 h-8 w-8 text-GrayDark" />
      </article>
    </section>
  );
};

export default Searcher;
