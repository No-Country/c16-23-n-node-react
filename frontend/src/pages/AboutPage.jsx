import Description from "../components/Description";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

function AboutPage () {
  return (
    <>
      <Navbar />
      <main className="bg-Primary font-poppins flex flex-col gap-10 p-4 pb-10 select-none">
        <Description />
        <Team />
      </main>
      <Footer />
    </>
  );
};
export default AboutPage;
