/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function PetCard({ pet }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/petInformation/${pet.id}`);
  };

  return (
    <div className="m-1 overflow-hidden rounded-xl bg-PrimaryDark shadow-sm">
      <div className="m-3">
        <img
          src={pet.photo01}
          alt="foto perro"
          className="h-20 w-full rounded-md"
        />
      </div>
      <div className="px-3">
        <div className="mb-2 flex justify-between">
          <span className="rounded-lg border bg-White px-1 text-sm font-medium">
            {pet.name}
          </span>
          <span className="rounded-lg border bg-White px-1 text-sm font-medium">
            {pet.size}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="rounded-lg border bg-White px-1 text-sm font-medium">
            {pet.gender}
          </span>
          <span className="rounded-lg border bg-White px-1 text-sm font-medium">
            {pet.kind}
          </span>
        </div>
        <div className="my-3 text-center">
          <button
            className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
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
