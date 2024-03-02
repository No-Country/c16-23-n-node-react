import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { LoginProvider } from "../context/LoginProvider";
import { UserProvider } from "../context/UserProvider";
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

function Rutas() {
  const [user, setUser] = useLocalStorage("user");

  return (
    <UserProvider>
      <LoginProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrationTypes" element={<TypeRegister />} />
          <Route
            path="/adopterRegistration"
            element={<RegisterAdopterPage />}
          />
          <Route
            path="/shelterRegistration"
            element={<RegisterShelterPage />}
          />
          <Route            
            path="/PetDashboard"
            element={<PetDashboard />}
          />
          <Route            
            path="/NewPet"
            element={<NewPet />}
          />
          <Route path="/petInformation/:id" element={<PetInformationPage />} />
          <Route
            path="/shelterInformation/:id"
            element={<ShelterInformationPage />}
          />
          <Route
            element={
              <ProtectedRoutes canActivate={user} redirectPath="/login" />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Route>
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route path="*" element={<NotFound404Page />} />
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
          <Route path="/adopcionForm" element={<AdopcionFormPage />} />
        </Routes>
      </LoginProvider>
    </UserProvider>
  );
}

export default Rutas;
