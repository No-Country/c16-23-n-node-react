import Footer from "../../components/shared/Footer";
import ShelterPassword from "../../components/ShelterProfilePage/ShelterPassword";
import Navbar from "../../components/shared/Navbar";

function ShelterPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-20 font-poppins text-black">
       <ShelterPassword />
      </main>
      <Footer />
    </>
  );
}

export default ShelterPasswordPage;