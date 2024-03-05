const getConfigToken = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

export default getConfigToken;

// const getConfigToken = () => {
//   // Supongamos que aquí se obtiene el token de autenticación de alguna manera
//   const token = "5479573945";
//   return {
//     headers: {
//       // "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// export default getConfigToken;
