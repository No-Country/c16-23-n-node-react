import UserPasswordForm from "../../components/UserProfilePage/UserPasswordForm";
import Footer from "../../components/shared/Footer";
import ImageUpload from "../../components/shared/ImageUpload";
import Navbar from "../../components/shared/Navbar";

function UpdateUserPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <ImageUpload />
        <UserPasswordForm />
      </main>
      <Footer />
    </>
  );
}

export default UpdateUserPasswordPage;
