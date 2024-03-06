function ModalAdoption({
  showModal,
  setShowModal,
  handleGoShelter,
  handleGoHome,
}) {
  return (
    showModal && (
      <div className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
        <div className="relative h-400 w-296 max-w-md rounded-lg bg-PrimaryDark p-8 shadow-lg">
          <div className="absolute right-0 top-0">
            <button
              className="p-2 text-SecondaryDark hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="h-12 w-12 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M13.657 6.343a.5.5 0 0 1 .708.707L10.707 10l3.658 3.657a.5.5 0 1 1-.708.708L10 10.707l-3.657 3.658a.5.5 0 1 1-.708-.708L9.293 10 5.636 6.343a.5.5 0 0 1 .708-.707L10 9.293l3.657-3.657z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-2xl font-semibold text-SecondaryDark">
              Tu solicitud ha sido enviada con éxito, el refugio se pondrá en
              contacto contigo lo antes posible
            </p>
            <div className="flex flex-col items-center justify-center gap-5">
              <button
                className="w-180 rounded-2xl bg-Tertiary px-4 py-2 font-semibold text-white hover:bg-blue-600"
                onClick={handleGoShelter}
              >
                Ir a refugios
              </button>
              <button
                className="w-180 rounded-2xl bg-TertiaryDark px-4 py-2 font-semibold text-white hover:bg-blue-600"
                onClick={handleGoHome}
              >
                Volver al home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalAdoption;
