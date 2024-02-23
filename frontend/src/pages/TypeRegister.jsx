import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserGroupIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

function TypeRegister() {
  return (
    <main className="font-poppins bg-Primary text-black select-none">
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-16">
          <figure className="uppercase font-bold text-3xl">logo</figure>
          <article className="w-80 text-center">
            <strong className="text-2xl font-semibold leading-normal mb-10 text-center">
              ¿Qué cuenta quieres crear?
            </strong>
          </article>
          <article className="flex flex-col gap-8">
            <div className="flex flex-row justify-center items-center gap-4 bg-Tertiary py-3 px-5 rounded-2xl shadow-xl cursor-pointer">
              <Link to="/registerAdoptador">
                <UserGroupIcon className="h-12 w-12 text-white" />
              </Link>
              <span className="text-2xl text-white">Personal</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 bg-Tertiary py-3 px-5 rounded-2xl shadow-xl cursor-pointer">
              <Link to="/registerRefugio">
                <BuildingOfficeIcon className="h-12 w-12 text-white" />
              </Link>
              <span className="text-2xl text-white">Como Refugio</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default TypeRegister;
