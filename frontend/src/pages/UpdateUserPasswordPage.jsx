import Footer from "../components/Footer";
import ImageUpload from "../components/ImageUpload";
import Navbar from "../components/Navbar";

function UpdateUserPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <ImageUpload />
      </main>
      <Footer />
    </>
  );
}

export default UpdateUserPasswordPage;
