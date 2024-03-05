/* eslint-disable react/prop-types */

function PetCardComponent({ pet, children }) {
  return (
    <div className="m-1 overflow-hidden rounded-xl bg-PrimaryDark shadow-sm">
      <div className="m-3">
        <img
          src={pet.images[0].url}
          alt="foto perro"
          className="h-20 w-full rounded-md object-cover object-center"
        />
      </div>
      <div className="px-3">
        <div className="mb-2 flex justify-between">
          <span className="rounded-lg border bg-White px-1 text-sm font-medium">
            {pet.name.substring(0, 5)}
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
            {pet.pet_type}
          </span>
        </div>
        <div>
          {children && (
            <div className=" my-3 flex justify-between text-center">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PetCardComponent;
