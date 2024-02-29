/* eslint-disable react/prop-types */
import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: "User342",
    email: "example@gmail.com",
    phoneNumber: "+54 555555555",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
