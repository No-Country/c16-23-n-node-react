import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import ShelterProfileUpdate from "../../components/ShelterProfilePage/ShelterProfileUpdate";



function ShelterProfileUpdatePage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-20 font-poppins text-black">
        <ShelterProfileUpdate />
      </main>
      <Footer />
    </>
  );
}

export default ShelterProfileUpdatePage;