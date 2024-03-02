import { useState } from "react";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-2 inline-block text-left">
      <div className="">
        <button
          type="button"
          onClick={toggleDropdown}
          className="2xl:w-288 inline-flex items-center justify-center rounded-full border
          bg-white px-4  py-2 text-sm font-medium text-GrayDark shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 2xl:justify-between 2xl:text-xl"
        >
          <span className="truncate font-poppins">{title}</span>
          {/* Icono de flecha abajo */}
          <svg
            className={`ml-2 h-5 w-5 ${isOpen ? "-mr-1" : "mr-2"}`}
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Dropdown panel, visible si isOpen es true */}
      {isOpen && (
        <div className="left-0  origin-top-left  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {/* Mapea sobre las opciones para crear los elementos del dropdown */}
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-GrayDark hover:bg-gray-100 hover:text-gray-900"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
