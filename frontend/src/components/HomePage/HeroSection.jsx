import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function HeroSection() {
  const { login, type } = useContext(AuthContext);

  return (
    <div>
      {login ? (
        type === "user" ? (
          <div
            className="select-none bg-Primary p-5 pt-20"
            style={{
              backgroundImage:
                'url("/img/herosection/HeroSectionLoggeado.png")',
            }}
          >
            <h1 className="mb-5 pr-5 font-poppins text-lg font-bold text-White">
              Descubre nuestros refugios colaboradores y únete a la causa con tu
              aporte hoy mismo
            </h1>
            <Link
              to="/shelters"
              className="mb-5 font-poppins text-xl font-bold text-PrimaryDark underline"
            >
              Ver Refugios
            </Link>
          </div>
        ) : type === "shelter" ? (
          <div
            className=" select-none bg-Primary p-5 pt-20"
            style={{
              backgroundImage:
                'url("/img/herosection/HeroSectionRefugios.png")',
            }}
          >
            <h1 className="mb-5 pr-5 font-poppins text-lg font-bold text-White">
              Para agregar, editar o eliminar tus mascotas, dirígete a la
              sección ”Mis Mascotas”
            </h1>
            <Link
              to="/"
              className="mb-5 font-poppins text-xl font-bold text-PrimaryDark underline"
            >
              Ir a Mis Macotas
            </Link>
          </div>
        ) : null
      ) : (
        <div
          className="select-none bg-Primary p-5 pt-20"
          style={{
            backgroundImage:
              'url("/img/herosection/HeroSectionSinloggearse.png")',
          }}
        >
          <h1 className="mb-5 pr-5 font-poppins text-lg font-bold text-White">
            Para comenzar el proceso de adopción, queremos conocerte mejor. Por
            favor, inicia sesión
          </h1>
          <Link
            to="/loginTypes"
            className="mb-5 font-poppins text-xl font-bold text-PrimaryDark underline"
          >
            Inicia Sesión aquí
          </Link>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
