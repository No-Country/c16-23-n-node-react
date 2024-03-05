import axios from "axios";
import { useState } from "react";

const usePets = () => {
  const defaultBaseUrl = "http://localhost:3002/api";
  const [petInfo, setPetInfo] = useState([]);

  const getPetInfo = (path = "/pet") => {
    const url = `${defaultBaseUrl}${path}`;
    axios
      .get(url)
      .then((res) => {
        console.log("Response from API:", res.data);
        setPetInfo(res.data);
      })
      .catch((err) => console.error("Error fetching pet info:", err));
  };

  const deletePetById = async (id, name) => {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.error("Error deleting pet:", error);
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
      console.error("Error creating pet:", error);
      throw error;
    }
  };
  return { petInfo, getPetInfo, deletePetById, createPet };
};

export default usePets;
