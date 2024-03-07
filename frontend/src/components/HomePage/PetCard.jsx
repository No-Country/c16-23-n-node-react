/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function PetCard({ pet }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/petInformation/${pet._id}`);
  };

  return (
    <div className="m-1 overflow-hidden rounded-xl bg-PrimaryDark shadow-sm 2xl:h-504 2xl:w-360 2xl:p-4">
      <div className="m-3">
        <img
          src={pet.images[0]?.url}
          alt="foto perro"
         // className="h-20 w-full rounded-md 2xl:h-240"
         className="h-20 w-full rounded-md object-cover object-center"
        />
      </div>
      <div className="px-3 2xl:mt-6">
        <div className="mb-2 flex justify-between">
          <span className="w-16 rounded-lg border bg-White px-1 text-center text-sm font-medium 2xl:px-4 2xl:text-2xl">
            {pet.name}
          </span>
          <span className="w-16 rounded-lg border bg-White px-1 text-center text-sm font-medium 2xl:px-4 2xl:text-2xl">
            {pet.size}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="w-16 rounded-lg border bg-White px-1 text-center text-sm font-medium 2xl:px-4 2xl:text-2xl">
            {pet.gender}
          </span>
          <span className="w-16 rounded-lg border bg-White px-1 text-center text-sm font-medium 2xl:px-4 2xl:text-2xl">
            {pet.pet_type}
          </span>
        </div>
        <div className="my-6 text-center">
          <button
            className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White 2xl:h-12 2xl:w-192 2xl:text-2xl 2xl:font-semibold"
            onClick={handleDetails}
          >
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
