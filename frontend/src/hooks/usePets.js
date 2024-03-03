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

  const deletePetById = async (id) => {
    const url = `${defaultBaseUrl}/pet/${id}`;
    try {
      await axios.delete(url);
      alert("Pet deleted successfully");
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };
  return { petInfo, getPetInfo, deletePetById };
};

export default usePets;
