import { useNavigate } from "react-router-dom";
import shelters from "../../data/shelters.json";

function RefugeCard() {

  const navigate = useNavigate()

  const handleDetails = (id) => {
    navigate(`/shelterInformation/${id}`)
  }

  return (
    <section className="mx-auto mb-8 mt-4 flex flex-col items-center gap-3 bg-Primary">
      {shelters.map((shelter, index) => (
        <article key={index} className="flex w-320 flex-col gap-3 rounded-2xl bg-PrimaryDark p-4 shadow-xl">
          <h3 className="block text-2xl font-semibold leading-9">
            {shelter.name}
          </h3>
          <p className="text-base leading-5">
            {shelter.description}
          </p>
          <div className="flex h-10 items-center justify-between gap-4 px-2">
            <button className="bg-TertiaryDark rounded-2xl px-7 py-2.5 text-base font-semibold leading-6 text-White hover:bg-Hover" onClick={() => handleDetails(shelter.id)}>
              Saber más
            </button>
            <button className="rounded-2xl bg-Tertiary px-7 py-2.5 text-base font-semibold leading-6 text-White">
              Donar
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

export default RefugeCard;
