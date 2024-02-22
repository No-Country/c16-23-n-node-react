import { useNavigate } from "react-router-dom";

function PetCard({ pet }) {

  const navigate = useNavigate()
  
  const handleDetails = () => {
    navigate(`/petInformation/${pet.id}`)
  }

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
          <p className="font-poppins text-sm">{pet.name}</p>
          <p className="font-poppins text-sm">{pet.size}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-poppins text-sm">{pet.gender}</p>
          <p className="text-right font-poppins text-sm ">{pet.kind}</p>
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
