import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import LogoutPage from "./pages/LogoutPage";
import { Route, Routes } from "react-router-dom";
import RegisterRefugioPage from "./pages/RegisterRefugioPage";
import RegisterAdoptadorPage from "./pages/RegisterAdoptadorPage";
import TypeRegister from "./pages/TypeRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/typeRegister" element={<TypeRegister />} />
        <Route path="/registerAdoptador" element={<RegisterAdoptadorPage />} />
        <Route path="/registerRefugio" element={<RegisterRefugioPage />} />
        {/* <Route element={<ProtectedRoutes />} > */}
        <Route path="/logout" element={<LogoutPage />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
