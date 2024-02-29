import UserProfileInformation from "../components/UserProfileInformation";
import Footer from "../components/Footer";
import ImageUpload from "../components/ImageUpload";
import Navbar from "../components/Navbar";

function UserProfilePage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <ImageUpload />
        <UserProfileInformation />
      </main>
      <Footer />
    </>
  );
}

export default UserProfilePage;
