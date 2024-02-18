import { useState } from "react";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left  mb-2">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center px-4
          py-2 border  shadow-sm text-sm font-medium rounded-fulltext-GrayDark  hover:bg-gray-100 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="truncate font-poppins">{title}</span>
          {/* Icono de flecha abajo */}
          <svg
            className={`w-5 h-5 ml-2 ${isOpen ? "-mr-1" : "mr-2"}`}
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
        <div className="origin-top-left  left-0  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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

export default Dropdown
