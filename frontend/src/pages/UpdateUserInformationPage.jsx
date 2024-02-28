import UserForm from "../components/UserForm";
import Footer from "../components/Footer";
import ImageUpload from "../components/ImageUpload";
import Navbar from "../components/Navbar";

function UpdateUserInformationPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <ImageUpload />
        <UserForm />
      </main>
      <Footer />
    </>
  );
}

export default UpdateUserInformationPage;
