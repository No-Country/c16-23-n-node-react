/* eslint-disable no-unused-vars */
import FormAdoption from "../../components/HomePage/FormAdoption";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { useForm } from "react-hook-form";

function AdopcionFormPage() {
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary p-5 pt-16">
        <h1 className="my-5 font-poppins text-xl ">
          Por favor ayúdanos a conocerte mejor, el refugio encargado se pondrá
          en contacto contigo una vez revisada tu solicitud
        </h1>
        <FormAdoption />
      </main>
      <Footer />
    </>
  );
}

export default AdopcionFormPage;
