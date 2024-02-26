/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
// import ProtectedRoutes from "../pages/ProtectedRoutes";
import LogoutPage from "../pages/LoginPage/LogoutPage";
import { Route, Routes } from "react-router-dom";
import RegisterShelterPage from "../pages/LoginPage/RegisterShelterPage";
import RegisterAdopterPage from "../pages/LoginPage/RegisterAdopterPage";
import TypeRegister from "../pages/LoginPage/TypeRegister";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import SheltersPage from "../pages/SheltersPage/SheltersPage";
import ShelterInformationPage from "../pages/SheltersPage/ShelterInformationPage";
import PetInformationPage from "../pages/PetsPage/PetInformationPage";
import NotFound404Page from "../pages/NotFound404Page";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import { useLocalStorage } from "react-use";
import { UserProvider } from "../context/UserProvider";
// import ProtectedRoutes from "../pages/ProtectedRoutes";

function Rutas() {
  const [user, setUser] = useLocalStorage("user");

  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrationTypes" element={<TypeRegister />} />
        <Route path="/adopterRegistration" element={<RegisterAdopterPage />} />
        <Route path="/shelterRegistration" element={<RegisterShelterPage />} />
        <Route path="/petInformation/:id" element={<PetInformationPage />} />
        <Route
          path="/shelterInformation/:id"
          element={<ShelterInformationPage />}
        />
        <Route
          element={<ProtectedRoutes canActivate={user} redirectPath="/login" />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Route>
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/shelters" element={<SheltersPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </UserProvider>
  );
}

export default Rutas;
