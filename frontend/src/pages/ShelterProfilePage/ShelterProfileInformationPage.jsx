import { useForm } from "../../components/ShelterProfilePage/ShelterForm";
import Footer from "../../components/shared/Footer";
// import ImageShelterProf from "/img/profile/shelter.png";
import Navbar from "../../components/shared/Navbar";


function ShelterProfileInformationPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        {/* <ImageShelterProf/> */}
        <ShelterForm />
        <ShelterProfileInformationPage/>
      </main>
      <Footer />
    </>
  );
}

export default ShelterProfileInformationPage;
