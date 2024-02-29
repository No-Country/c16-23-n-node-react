import { useForm } from "react-hook-form";
import Footer from "../../components/shared/Footer";
import ImageUpload from "../../components/shared/ImageUpload";
import Navbar from "../../components/shared/Navbar";

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
