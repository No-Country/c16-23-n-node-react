import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RefugeCard from "../components/RefugeCard";
import Searcher from "../components/Searcher";

//Componente RefugiosPage
function RefugesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-Primary font-poppins flex flex-col select-none">
        <Searcher />
        <RefugeCard />
      </main>
      <Footer />
    </>
  );
}

export default RefugesPage;
