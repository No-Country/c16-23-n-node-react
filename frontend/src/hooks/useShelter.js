import axios from "axios";
import { useState } from "react";
import getConfigToken from "../utils/getConfigToken";

const useShelter = () => {
  const baseUrl = "http://localhost:3000/api/pet"; // Moví la declaración de baseUrl aquí

  const [adoption, setAdoption] = useState();

  // No es necesario imprimir la salida de getConfigToken(), supongo que funciona correctamente.

  const registerAdoption = async (data, path = "") => {
    try {
      const url = `${baseUrl}${path}`;
      const config = getConfigToken(); // Obtener la configuración del token

      if (!config.headers || !config.headers.Authorization) {
        throw new Error("Token de autenticación no proporcionado");
      }
      console.log(url, data, config);
      const response = await axios.put(url, data, config); // Pasar la configuración del token como tercer argumento
      setAdoption(response.data);
    } catch (error) {
      console.error("Error registering adoption:", error);
      throw error;
    }
  };

  return { adoption, registerAdoption };
};

export default useShelter;
