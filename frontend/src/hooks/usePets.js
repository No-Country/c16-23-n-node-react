import axios from "axios";
import { useState } from "react";

const usePets = () => {
  const defaultBaseUrl = "https://c16-23-n-node-react-production.up.railway.app/api";

  const [petInfo, setPetInfo] = useState([]);

  const getPetInfo = (path = "/pet") => {
    const url = `${defaultBaseUrl}${path}`;
    axios
      .get(url)
      .then((res) => {
        const pets = res.data.filter((pet) => pet.adoption_status === true);
        setPetInfo(pets);
        // console.log("Response from API:", res.data);
        setPetInfo(res.data);

      })
      .catch((err) => console.error("Error pet info:", err));
  };

  const getPetInfoById = async (id) => {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      const response = await axios.get(url);
      setPetInfo([response.data]);
      return response.data;
    } catch (error) {
      console.error("Error pet info by ID:", error);
      throw error;
    }
  };

  const updateAdoptionStatus = async (id, currentStatus) => {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      const response = await axios.get(url);
      const pet = response.data;
      pet.adoption_status = !currentStatus;
      await axios.put(url, pet);
    } catch (error) {
      console.error("Error actualizando estado de adopción:", error);
    }
  };
  const createPet = async (petData) => {
    const url = `${defaultBaseUrl}/pet`;
    try {
      const formData = new FormData();
      Object.entries(petData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      petData.images.forEach((image) => {
        formData.append("image", image);
      });
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Mascota creada correctamente!");
      return response.data;
    } catch (error) {
      console.error("Error creando mascota:", error);
      throw error;
    }
  };
  return { petInfo, getPetInfo, getPetInfoById, updateAdoptionStatus, createPet };
};

export default usePets;
