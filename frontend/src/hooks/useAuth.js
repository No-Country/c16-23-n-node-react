import axios from "axios";
import { useState } from "react";

const useAuth = () => {
  const defaultBaseUrl = "http://localhost:4000/api";
  const [userInfo, setUserInfo] = useState([]);

  const createUser = (data, navigate, path = "/users") => {
    const url = `${defaultBaseUrl}${path}`;
    axios
      .post(url, data)
      .then((res) => {
        console.log("Response from API:", res.data);
        setUserInfo(res.data);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const loginUser = (data, navigate, path = "/users") => {
    const url = `${defaultBaseUrl}${path}`;
    axios
      .post(url, data)
      .then((res) => {
        console.log("Response from API:", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "username",
          res.data.user.firstName + " " + res.data.user.lastName,
        );
        navigate("/logout");
      })
      .catch((err) => {
        console.error("Error fetching pet info:", err);
        localStorage.removeItem("token");
      });
  };

  return { userInfo, createUser, loginUser };
};

export default useAuth;
