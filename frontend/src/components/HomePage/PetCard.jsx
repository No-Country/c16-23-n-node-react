/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import pets from "../../data/pets.json"
import PetCardComponent from "../PetCardComponent";

function PetCard({ pet }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/petInformation/${pet.id}`);
  };

  return (
    <div>
      {pets.map((pet, index) => (
        <div key={index} >
          <PetCardComponent pet={pet} >
            <button
              className="rounded-full bg-Tertiary px-3 py-1 font-poppins text-White"
              onClick={handleDetails}
            >
              Saber Más!
            </button>
          </PetCardComponent>
        </div>
      ))}
    </div>
  );
}

export default PetCard;