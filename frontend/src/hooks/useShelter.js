import axios from "axios";
import { useState } from "react";

const useShelter = (baseUrl) => {
  baseUrl = "http://localhost:4000/adoption";

  const [adoption, setAdoption] = useState();

  //POST
  const registerAdoption = (data) => {
    const url = `${baseUrl}`;
    axios
      .post(url, data)
      .then((res) => setAdoption(res.data))
      .catch((err) => console.log(err));
  };

  return { adoption, registerAdoption };
};

export default useShelter;
