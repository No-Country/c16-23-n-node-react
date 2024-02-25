// import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import LogoutPage from "../pages/LoginPage/LogoutPage";
import { Route, Routes } from "react-router-dom";
import RegisterShelterPage from "../pages/LoginPage/RegisterShelterPage";
import RegisterAdopterPage from "../pages/LoginPage/RegisterAdopterPage";
import TypeRegister from "../pages/LoginPage/TypeRegister";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import SheltersPage from "../pages/SheltersPage/SheltersPage";
import ShelterInformationPage from '../pages/SheltersPage/ShelterInformationPage';
import PetInformationPage from '../pages/PetsPage/PetInformationPage';
import NotFound404Page from '../pages/NotFound404Page';
import ProfileUpdatePage from "../pages/ProfileUpdatePage";
import ProfileInformationPage from "../pages/ProfileInformationPage"

function Rutas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrationTypes" element={<TypeRegister />} />
        <Route path="/adopterRegistration" element={<RegisterAdopterPage />} />
        <Route path="/shelterRegistration" element={<RegisterShelterPage />} />
        <Route path="/petInformation/:id" element={<PetInformationPage />} />
        <Route path="/shelterInformation/:id" element={<ShelterInformationPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/shelters" element={<SheltersPage />} />
        {/* <Route element={<ProtectedRoutes />} > */}
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<NotFound404Page />} />
        <Route path="/profile" element={<ProfileUpdatePage />} />
        <Route path="/profileInfo" element={<ProfileInformationPage />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default Rutas;
