/* eslint-disable react/prop-types */
import { createContext } from "react";

export const LoginContext = createContext();

const UserContextProvider = ({ children }) => {
  return <LoginContext.Provider>{children}</LoginContext.Provider>;
};

export default UserContextProvider;
