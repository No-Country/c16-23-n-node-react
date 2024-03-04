import { createContext, useState } from "react";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
    const [petData, setPetData] = useState({
      name: "",
      age: "",
      pet_type: "",
      size: "",
      gender: "",
      characteristics: "",
      description: "",
      images: [],
      imagePreview: null,
    });

    const updatePetData = (newData) => {
      setPetData(newData);
    };
  
    return (
      <PetContext.Provider value={{ petData, setPetData,updatePetData }}>
        {children}
      </PetContext.Provider>
    );
  };
