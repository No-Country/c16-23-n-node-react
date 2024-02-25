import Navbar from "../components/Navbar";
import ChangePassword1 from "../components/ChangePassword1";

function ProfileUpdatePage() {
  return (
    <>
     <Navbar/>
      <main className="bg-Primary font-poppins flex flex-col select-none">
       <ChangePassword1/>
      </main>
     
    </>
  );
}

export default ProfileUpdatePage;
