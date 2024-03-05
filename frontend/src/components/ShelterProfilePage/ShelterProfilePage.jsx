import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import ShelterProfileInformation from "../../components/ShelterProfilePage/ShelterProfileInformation";

function ShelterProfilePage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-20 font-poppins text-black">
        <ShelterProfileInformation/>
      </main>
      <Footer />
    </>
  );
}

export default ShelterProfilePage;