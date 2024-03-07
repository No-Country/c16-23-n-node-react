/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoApp from "/img/logo/IconConexion.png";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const context = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.addEventListener("resize", detectSize);
    };
  }, [windowDimension.innerWidth]);

  return (
    <nav className="fixed z-30 flex h-14 w-full select-none items-center justify-between bg-Secondary p-5">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between 2xl:w-1440">
        <figure>
          <Link
            to="/"
            className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
          >
            <img src={logoApp} className="h-12" />
          </Link>
        </figure>
        <ul className="hidden text-xl font-bold text-white md:flex md:gap-4 2xl:gap-8">
          <li>
            <Link
              to="/"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shelters"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600 "
            >
              Refugios
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600 "
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
            >
              Sobre nosotros
            </Link>
          </li>
          {context.type == "shelter" && (
            <li>
              <Link
                onClick={handleClick}
                to="/"
                className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
              >
                Mis mascotas
              </Link>
            </li>
          )}
          {context.login && (
            <li>
              <Link
                onClick={handleClick}
                to="/userprofile"
                className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
              >
                Mi Perfil
              </Link>
            </li>
          )}

          {context.login ? (
            <li>
              <Link
                onClick={handleClick}
                to="/logout"
                className="text-shadow-sm text-xl font-bold text-Alert hover:text-blue-600 active:text-zinc-600"
              >
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link
                onClick={handleClick}
                to="/loginTypes"
                className="text-shadow-sm text-xl font-bold text-White hover:text-blue-600 active:text-zinc-600"
              >
                Registro/Inicio de Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>

      {windowDimension.innerWidth < 768 && !isMenuOpen ? (
        <Bars3Icon
          className="visible z-20 block h-12 w-8 cursor-pointer font-extrabold text-white"
          onClick={handleClick}
        />
      ) : (
        windowDimension.innerWidth < 768 && (
          <XMarkIcon
            className="visible z-20 block h-12 w-8 cursor-pointer font-extrabold text-white"
            onClick={handleClick}
          />
        )
      )}
      {windowDimension.innerWidth > 768 && !isMenuOpen ? (
        <Bars3Icon
          className="invisible hidden h-12 w-8 cursor-pointer font-extrabold text-white"
          onClick={handleClick}
        />
      ) : (
        windowDimension.innerWidth > 768 && (
          <XMarkIcon
            className="invisible sticky hidden h-12 w-8 cursor-pointer font-extrabold text-white"
            onClick={handleClick}
          />
        )
      )}

      <div
        className={`${
          windowDimension.innerWidth < 768 && isMenuOpen ? "top-0" : "-top-full"
        } fixed left-0 z-10 flex h-340 w-full items-center justify-center bg-Secondary transition-all duration-500 ease-in-out`}
      >
        <figure className="absolute left-0 top-0 px-5 pt-1">
          <Link
            to="/"
            className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
          >
            <img src={logoApp} className="h-12" />
          </Link>
        </figure>
        <ul className="flex flex-col gap-6 text-center">
          <li>
            <Link
              onClick={handleClick}
              to="/"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="/shelters"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
            >
              Refugios
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="#"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="/aboutus"
              className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
            >
              Sobre Nosotros
            </Link>
          </li>
          {context.type == "shelter" && (
            <li>
              <Link
                onClick={handleClick}
                to="/"
                className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
              >
                Mis mascotas
              </Link>
            </li>
          )}
          {context.login && (
            <li>
              <Link
                onClick={handleClick}
                to="/userprofile"
                className="text-shadow-sm text-xl font-bold text-white hover:text-blue-600 active:text-zinc-600"
              >
                Mi Perfil
              </Link>
            </li>
          )}

          {context.login ? (
            <li>
              <Link
                onClick={handleClick}
                to="/logout"
                className="text-shadow-sm text-xl font-bold text-Alert hover:text-blue-600 active:text-zinc-600"
              >
                Cerrar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link
                onClick={handleClick}
                to="/loginTypes"
                className="text-shadow-sm text-xl font-bold text-White hover:text-blue-600 active:text-zinc-600"
              >
                Registro/Inicio de Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
