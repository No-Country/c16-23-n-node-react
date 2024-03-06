import UserProfileInformation from "../../components/UserProfilePage/UserProfileInformation";
import Footer from "../../components/shared/Footer";
import UserPhoto from "/img/profile/UserPhoto.svg";
import Navbar from "../../components/shared/Navbar";
import { useState } from "react";

function UserProfilePage() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };
  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <div className="flex justify-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="galleryInput"
            onChange={handleImageChange}
          />
          <label htmlFor="galleryInput" className="cursor-pointer">
            <img src={UserPhoto} alt="Add Pet" />
          </label>
        </div>
        <UserProfileInformation />
      </main>
      <Footer />
    </>
  );
}

export default UserProfilePage;
