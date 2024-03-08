/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function useAuthUser() {
  const context = useContext(AuthContext);

  const navigate = useNavigate();

  async function createUser(data) {
    const url =
      "https://c16-23-n-node-react-production.up.railway.app/api/user/create";

    try {
      const res = await axios.post(url, data);
      if (res) {
        console.log("Registrado exitosamente");
        // navigate("/loginUser");
      } else {
        console.error("Error: Respuesta inesperada del servidor");
      }
    } catch (error) {
      console.error(
        "Error al iniciar sesión",
        error.response?.data || error.message,
      );
    }
  }

  async function loginUser(data) {
    const url =
      "https://c16-23-n-node-react-production.up.railway.app/api/user/login";

    try {
      const res = await axios.post(url, data);
      if (res) {
        console.log(res.data);
        context.handlerLogin(
          res.data.token,
          "user",
          res.data.firstName,
          res.data._id,
        );
        console.log("Inicio de sesión exitoso");
        navigate("/");
      } else {
        console.error("Error: Respuesta inesperada del servidor");
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  }

  return { createUser, loginUser };
}

export default useAuthUser;
