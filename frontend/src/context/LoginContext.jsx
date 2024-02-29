/* eslint-disable react/prop-types */
import { createContext } from "react";

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  return <LoginContext.Provider>{children}</LoginContext.Provider>;
}

export default LoginContextProvider;
