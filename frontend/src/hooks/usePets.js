import axios from "axios";
import { useState } from "react";

const usePets = () => {
  const defaultBaseUrl = "https://c16-23-n-node-react-production.up.railway.app/api";
  const [petInfo, setPetInfo] = useState([]);

  async function getPetInfo() {
    const url = `${defaultBaseUrl}/pet/`;
    axios
      .get(url)
      .then((res) => {
        const pets = res.data.filter((pet) => pet.adoption_status === true);
        setPetInfo(pets);
        setPetInfo(res.data);
      })
      .catch((err) => console.error("Error pet info:", err));
  }

  async function getPetInfoById(id) {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      const response = await axios.get(url);
      setPetInfo([response.data]);
      return response.data;
    } catch (error) {
      console.error("Error pet info by ID:", error);
      throw error;
    }
  }

  async function updateAdoptionStatus(id, currentStatus) {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      const response = await axios.get(url);
      const pet = response.data;
      pet.adoption_status = !currentStatus;
      await axios.put(url, pet);
    } catch (error) {
      console.error("Error updating adoption status:", error);
    }
  }
  async function createPet(petData) {
    const url = `${defaultBaseUrl}/pet`;
    try {
      const formData = new FormData();

      Object.entries(petData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      console.log(petData.images);
      if (petData.images && Array.isArray(petData.images)) {
        petData.images.forEach((image) => {
          console.log(image);
          formData.append("image", image);
        });
      }
      console.log(formData);
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creando mascota:", error);
      throw error;
    }
  }

  async function deletePet(id) {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      axios.delete(url).then((res) => {
        console.log(res.data);
        const infoApiFiltered = petInfo.filter((ele) => ele.id !== id);
        setPetInfo(infoApiFiltered);
      });
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  }

  async function updatePet(id, data) {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      console.log(data);
      const res = await axios.put(url, data);
      const updatedPet = res.data;
      const updatedPetInfo = petInfo.map((pet) =>
        pet.id === id ? updatedPet : pet,
      );
      setPetInfo(updatedPetInfo);
    } catch (error) {
      console.error("Error updating pet:", error);
      throw error;
    }
  }

  return {
    petInfo,
    getPetInfo,
    getPetInfoById,
    updateAdoptionStatus,
    createPet,
    deletePet,
    updatePet,
  };
};

export default usePets;
