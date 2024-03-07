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
            <article className="w-80 text-center">
              <strong className="mb-10 text-center text-2xl font-semibold leading-normal">
                ¿Como te quieres logear?
              </strong>
            </article>
            <article className="flex flex-col gap-8">
              <div className="flex cursor-pointer rounded-2xl bg-Tertiary px-5 py-3 shadow-xl">
                <Link
                  to="/loginUser"
                  className="flex items-center justify-center gap-4"
                >
                  <UserGroupIcon className="h-12 w-12 text-white" />

                  <span className="text-2xl text-white">Personal</span>
                </Link>
              </div>
              <div className="flex cursor-pointer  rounded-2xl bg-Tertiary px-5 py-3 shadow-xl">
                <Link
                  to="/loginShelter"
                  className="flex items-center justify-center gap-4"
                >
                  <BuildingOfficeIcon className="h-12 w-12 text-white" />
                  <button>
                    <span className="text-2xl text-white">Como Refugio</span>
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default TypeRegister;
