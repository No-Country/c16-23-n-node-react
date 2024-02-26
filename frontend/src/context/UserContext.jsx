/* eslint-disable react/prop-types */
import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserContextProvider;
