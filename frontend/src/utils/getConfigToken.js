const getConfigToken = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  };
};

export default getConfigToken;
