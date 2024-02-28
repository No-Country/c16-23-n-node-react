/* eslint-disable react-hooks/rules-of-hooks */
import pets from "../../data/pets.json";
import { useNavigate } from "react-router-dom";
import PetCard from "./PetCard";

function ComponentPrueba({ pet }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/petInformation/${pet.id}`);
  };

  return (
    <div>
      {pets.map((pet, index) => (
        <div key={index} className="w-1/2">
          <PetCard pet={pet}>
            <button
              className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
              onClick={handleDetails}
            >
              Saber Más
            </button>
          </PetCard>{" "}
        </div>
      ))}
    </div>
  );
}

export default ComponentPrueba;
