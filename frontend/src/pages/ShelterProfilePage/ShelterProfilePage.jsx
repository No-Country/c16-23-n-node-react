import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import ShelterProfileInformation from "../../components/ShelterProfilePage/ShelterProfileInformation";
// import ImageShelterProf from "/img/profile/shelter.png";

function ShelterProfilePage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-20 font-poppins text-black">
        {/* <ImageShelterProf/> */}
        <ShelterProfileInformation />
      </main>
      <Footer />
    </>
  );
}

export default ShelterProfilePage;
