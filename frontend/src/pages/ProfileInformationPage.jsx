import Navbar from "../components/Navbar";
import  InformationProfi from "../components/InformationProfi";

function ProfileInformationPage() {
  return  (
       <>
        <Navbar/>
         <main className="bg-Primary font-poppins flex flex-col select-none">
          <InformationProfi/>
         </main>
        
       </>
       );
      
}

export default ProfileInformationPage;