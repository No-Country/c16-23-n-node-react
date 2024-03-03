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

  return { petInfo, getPetInfo };
};

export default usePets;
