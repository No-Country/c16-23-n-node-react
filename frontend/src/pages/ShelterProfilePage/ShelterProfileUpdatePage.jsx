import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import ShelterProfileUpdate from "../../components/ShelterProfilePage/ShelterProfileUpdate";
// import SocialIcons from "../../components/ShelterProfilePage/SocialIcons";


function ShelterProfileUpdatePage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-20 font-poppins text-black">
        {/* <SocialIcons/> */}
        <ShelterProfileUpdate />
      </main>
      <Footer />
    </>
  );
}

export default ShelterProfileUpdatePage;
