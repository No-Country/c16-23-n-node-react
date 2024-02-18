const NavBar = () => {
  return (
    <>
      {/* NavBar Inicia */}
      <nav className="sm:bg-secondary sm:flex sm:justify-between sm:px-5 sm:h-11 sm:items-center">
        {/* Logo Contenedor */}
        <div>
          <h2 className="sm:text-3xl sm:text-white sm:font-poppins sm:font-extrabold">
            LOGO
          </h2>
        </div>
        {/* Icono Contenedor */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white" //currentColor era antes el stroke
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      {/* NavBar Termina */}
    </>
  );
};

export default NavBar;
