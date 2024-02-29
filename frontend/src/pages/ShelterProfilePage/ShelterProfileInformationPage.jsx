import { useForm } from "react-hook-form";
import Footer from "../../components/shared/Footer";
import ImageShelterProf from "../../components/ShelterProfilePage/ImageShelterProf";
import Navbar from "../../components/shared/Navbar";
import ShelterForm from "../../components/ShelterProfilePage/ShelterForm";

function ShelterProfileInformationPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <ImageShelterProf />
        <ShelterForm />
      </main>
      <Footer />
    </>
  );
}

export default ShelterProfileInformationPage;
