import axios from "axios";
import { useState } from "react";
import getConfigToken from "../utils/getConfigToken";

const useShelter = (baseUrl) => {
  // baseUrl = "http://localhost:4000/adoption";
  baseUrl = "http://localhost:3000/api/pet";

  const [adoption, setAdoption] = useState();

  console.log(getConfigToken());

  //PUT
  // const registerAdoption = (data, path = "") => {
  //   const url = `${baseUrl}${path}`;
  //   axios
  //     .post(url, data)
  //     .then((res) => {
  //       setAdoption(res.data);
  //       localStorage.setItem("token", res.data.token);
  //       localStorage.setItem(
  //         "username",
  //         res.data.user.firstName + " " + res.data.user.lastName,
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // };

  const registerAdoption = async (data, path = "") => {
    try {
      const url = `${baseUrl}${path}`;
      console.log(url);
      const response = await axios.put(url, data, getConfigToken());
      setAdoption(response.data);
    } catch (error) {
      console.error("Error registering adoption:", error);
      throw error;
    }
  };

  return { adoption, registerAdoption };
};

export default useShelter;
