import Footer from "../../components/shared/Footer";
// import ImageShelterProf from "../components/shared/ImageShelterProf";
import ImageShelterProf from "../../components/ShelterProfilePage/ImageShelterProf";
import Navbar from "../../components/shared/Navbar";

function ShelterPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-20 font-poppins text-black">
       <ImageShelterProf/>
      </main>
      <Footer />
    </>
  );
}

export default ShelterPasswordPage;