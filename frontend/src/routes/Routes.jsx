/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { UserProvider } from "../context/UserProvider";
import { PetProvider } from "../context/PetContext";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import LogoutPage from "../pages/LoginPage/LogoutPage";
import RegisterShelterPage from "../pages/LoginPage/RegisterShelterPage";
import RegisterAdopterPage from "../pages/LoginPage/RegisterAdopterPage";
import TypeRegister from "../pages/LoginPage/TypeRegister";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import SheltersPage from "../pages/SheltersPage/SheltersPage";
import ShelterInformationPage from "../pages/SheltersPage/ShelterInformationPage";
import PetInformationPage from "../pages/PetsPage/PetInformationPage";
import NotFound404Page from "../pages/NotFound404Page";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import ShelterProfilePage from "../pages/ShelterProfilePage/ShelterProfilePage";
import UpdateUserInformationPage from "../pages/UserProfilePage/UpdateUserInformationPage";
import UpdateUserPasswordPage from "../pages/UserProfilePage/UpdateUserPasswordPage";
import AdopcionFormPage from "../pages/PetsPage/AdopcionFormPage";
import PetDashboard from "../pages/PetsPage/PetDashboard";
import NewPet from "../pages/PetsPage/NewPet";
import UploadImagesPage from "../pages/PetsPage/UploadImagesPage";
import PetPreview from "../pages/PetsPage/PetPreview";
import UpdatePetPage from "../pages/PetsPage/UpdatePetPage";

function Rutas() {
  const [user, setUser] = useLocalStorage("user");
  const [type, setType] = useLocalStorage("Type");

  return (
    <UserProvider>
      <PetProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginUser" element={<LoginPage />} />
          <Route path="/loginShelter" element={<LoginPage />} />
          <Route path="/loginTypes" element={<TypeRegister />} />
          <Route
            path="/adopterRegistration"
            element={<RegisterAdopterPage />}
          />
          <Route
            path="/shelterRegistration"
            element={<RegisterShelterPage />}
          />
          <Route path="/petInformation/:id" element={<PetInformationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path="/shelterInformation/:id"
            element={<ShelterInformationPage />}
          />
          <Route
            element={
              <ProtectedRoutes canActivate={user} redirectPath="/loginUser" />
            }
          >
            <Route path="/adopcionForm" element={<AdopcionFormPage />} />
          </Route>
          <Route path="/petdashboard" element={<PetDashboard />} />
          <Route path="/petPreview" element={<PetPreview />} />
          <Route path="/newPet" element={<NewPet />} />
          <Route path="/updatePet" element={<UpdatePetPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/shelterprofile" element={<ShelterProfilePage />} />
          <Route
            path="/updateUserInformation"
            element={<UpdateUserInformationPage />}
          />
          <Route
            path="/updateUserPassword"
            element={<UpdateUserPasswordPage />}
          />
          <Route path="/adopcionForm/:id" element={<AdopcionFormPage />} />
          <Route path="/uploadImages" element={<UploadImagesPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </PetProvider>
    </UserProvider>
  );
}

export default Rutas;

