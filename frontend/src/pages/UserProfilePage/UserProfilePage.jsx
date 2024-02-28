import UserProfileInformation from "../../components/UserProfilePage/UserProfileInformation";
import Footer from "../../components/shared/Footer";
import ImageUpload from "../../components/shared/ImageUpload";
import Navbar from "../../components/shared/Navbar";

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
