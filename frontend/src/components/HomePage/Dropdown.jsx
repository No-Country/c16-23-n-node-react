import React, { useState } from "react";

const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Estado para almacenar la opción seleccionada

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    setSelectedOption(option); // Actualizar el estado con la opción seleccionada
    setIsOpen(false);
  };

  return (
    <div className="relative mb-2 inline-block text-left">
      <div className="">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex items-center justify-center rounded-full border bg-white
          px-4 py-2  text-sm font-medium text-GrayDark shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 2xl:w-288 2xl:justify-between 2xl:text-xl"
        >
          <span className="truncate font-poppins">
            {selectedOption || title}{" "}
            {/* Mostrar la opción seleccionada o el título predeterminado */}
          </span>
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
        <div className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {/* Mapea sobre las opciones para crear los elementos del dropdown */}
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                className="block w-full px-4 py-2 text-left text-sm text-GrayDark hover:bg-gray-100 hover:text-gray-900"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
