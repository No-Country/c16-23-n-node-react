import React, { useState } from "react";
export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("Login") === "true" || false,
  );
  const [name, setName] = useState(localStorage.getItem("Name") || null);
  const [id, setId] = useState(localStorage.getItem("ID") || null);
  const [type, setType] = useState(
    JSON.parse(localStorage.getItem("User")) || null,
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("Token")) || null,
  );

  const handlerLogin = (token, type, name, id) => {
    setToken(token);
    localStorage.setItem("Token", JSON.stringify(token));
    setName(name);
    localStorage.setItem("Name", JSON.stringify(name));
    setId(id);
    localStorage.setItem("ID", JSON.stringify(id));
    setLogin(true);
    localStorage.setItem("Login", true);
    setType(type);
    localStorage.setItem("Type", JSON.stringify(type));
  };

  const handlerLogout = () => {
    setLogin(false);
    localStorage.removeItem("Login");
    setType();
    localStorage.removeItem("Type");
    setToken();
    localStorage.removeItem("Token");
    setName();
    localStorage.removeItem("Name");
  };

  return (
    <AuthContext.Provider
      value={{ login, handlerLogin, handlerLogout, type, token, name, id }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
