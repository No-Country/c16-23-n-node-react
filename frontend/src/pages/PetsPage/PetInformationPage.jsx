import Carousel from "../../components/shared/Carrousel";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import usePets from "../../hooks/usePets";
import { useEffect, useState, useCallback } from "react";

function PetInformationPage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const { getPetInfoById } = usePets();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const fetchPetInfoById = useCallback(async () => {
    try {
      const pet = await getPetInfoById(id);
      setPet(pet);
      if (pet && pet.images && pet.images.length > 0) {
        const imageUrls = pet.images.map((image) => image.url);
        setImages(imageUrls);
      }
    } catch (error) {
      console.error("Error fetching pet info:", error);
    }
  }, [id, getPetInfoById]);

  useEffect(() => {
    fetchPetInfoById();
  }, [fetchPetInfoById]);

  const handleDetails = () => {
    navigate(`/adopcionForm/${id}`);
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <h1 className="px-5 pt-5 text-2xl font-semibold">{pet?.name}</h1>
        <div className="mx-5 mb-8 p-5">
          {images.length > 0 ? (
            <Carousel images={images} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <article className="flex flex-col gap-5 px-5">
          <div className="flex justify-center gap-3">
            <span className="rounded-lg border border-black bg-White px-2 font-medium">
              {pet?.size}
            </span>
            <span className="rounded-lg border border-black bg-White px-2 font-medium">
              {pet?.gender}
            </span>
            <span className="rounded-lg border border-black bg-White px-2 font-medium">
              {pet?.pet_type}
            </span>
          </div>
          <p className="text-base font-normal">{pet?.description}</p>
          <div className="flex flex-col">
            <span className="text-base font-semibold">
              Refugio en que se encuentra:
            </span>
            <span className="text-base font-normal">
              {pet?.shelter_id?.name || ""}
            </span>
          </div>
          <div className="text-center">
            <button
              className="mb-9 mt-3 h-10 w-180 rounded-2xl bg-Tertiary text-White"
              onClick={handleDetails}
            >
              Iniciar Adopción
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default PetInformationPage;
