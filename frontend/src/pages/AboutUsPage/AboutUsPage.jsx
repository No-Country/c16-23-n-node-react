import Description from "../../components/AboutUsPage/Description";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TeamCard from '../../components/AboutUsPage/TeamCard';

function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10 p-4 pb-10 bg-Primary">
        <Description />
        <TeamCard />
      </main>
      <Footer />
    </>
  );
}
export default AboutUsPage
