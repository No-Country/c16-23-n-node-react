import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useShelter = (baseUrl) => {
  const navigate = useNavigate();

  const context = useContext(AuthContext);

  const [adoption, setAdoption] = useState();

  async function createShelter(data) {
    const url =
      "https://c16-23-n-node-react-production.up.railway.app/api/shelter/register";

    try {
      const res = await axios.post(url, data);
      console.log(res);
      if (res) {
        console.log("Registrado exitosamente");
        navigate("/loginShelter");
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

  async function loginShelter(data) {
    const url =
      "https://c16-23-n-node-react-production.up.railway.app/api/shelter/login";

    try {
      const res = await axios.post(url, data);
      if (res && res.data) {
        context.handlerLogin(
          res.data.shelterUser.token,
          "shelter",
          res.data.shelterUser.name,
          res.data.shelterUser._id,
        );
        console.log("Inicio de sesión exitoso");
        navigate("/");
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

  //POST
  const registerAdoption = (data) => {
    const url = `${baseUrl}`;
    axios
      .post(url, data)
      .then((res) => setAdoption(res.data))
      .catch((err) => console.log(err));
  };

  return { adoption, registerAdoption, loginShelter, createShelter };
};

export default useShelter;
