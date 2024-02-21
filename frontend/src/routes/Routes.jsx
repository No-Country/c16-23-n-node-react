import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import LogoutPage from "../pages/LogoutPage";
import { Route, Routes } from "react-router-dom";
import RegisterRefugioPage from "../pages/RegisterRefugioPage";
import RegisterAdoptadorPage from "../pages/RegisterAdoptadorPage";
import TypeRegister from "../pages/TypeRegister";
import AboutPage from '../pages/AboutPage';
import DescriptionPage from '../pages/DescriptionPage';
import RefugesPage from '../pages/RefugesPage';

function Rutas() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/typeRegister" element={<TypeRegister />} />
        <Route path="/registerAdoptador" element={<RegisterAdoptadorPage />} />
        <Route path="/registerRefugio" element={<RegisterRefugioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/refuges" element={<RefugesPage />} />
        {/* <Route element={<ProtectedRoutes />} > */}
        <Route path="/logout" element={<LogoutPage />} />
        {/* </Route> */}
      </Routes>

      
    </div>
  );
}

export default Rutas