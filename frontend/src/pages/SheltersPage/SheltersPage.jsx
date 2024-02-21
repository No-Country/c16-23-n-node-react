import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import RefugeCard from "../../components/SheltersPage/RefugeCard";
import Searcher from "../../components/SheltersPage/Searcher";

//Componente RefugiosPage
function SheltersPage() {
  return (
    <>
      <Navbar />
      <main className="flex select-none flex-col bg-Primary font-poppins">
        <Searcher />
        <RefugeCard />
      </main>
      <Footer />
    </>
  );
}

export default SheltersPage;
