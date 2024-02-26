import { Link } from "react-router-dom";
import { UserGroupIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/shared/Navbar";

function TypeRegister() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <section className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-16">
            <figure className="text-3xl font-bold uppercase">logo</figure>
            <article className="w-80 text-center">
              <strong className="mb-10 text-center text-2xl font-semibold leading-normal">
                ¿Qué cuenta quieres crear?
              </strong>
            </article>
            <article className="flex flex-col gap-8">
              <div className="flex cursor-pointer flex-row items-center justify-center gap-4 rounded-2xl bg-Tertiary px-5 py-3 shadow-xl">
                <Link to="/adopterRegistration">
                  <UserGroupIcon className="h-12 w-12 text-white" />
                </Link>
                <span className="text-2xl text-white">Personal</span>
              </div>
              <div className="flex cursor-pointer flex-row items-center justify-center gap-4 rounded-2xl bg-Tertiary px-5 py-3 shadow-xl">
                <Link to="/shelterRegistration">
                  <BuildingOfficeIcon className="h-12 w-12 text-white" />
                </Link>
                <span className="text-2xl text-white">Como Refugio</span>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default TypeRegister;
