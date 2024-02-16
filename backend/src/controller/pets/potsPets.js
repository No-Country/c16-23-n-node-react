//funcion de prueba para el posteo de refugios

import Pets from "../../models/pets.js";

const postPet = async (req, res) => {
    
  try {
    const { pet_type, name, age, gender, characteristics, status } = req.body; // Extrae los datos del cuerpo de la solicitud

    // if(!name){
    //     return res.status(301).json({ message: "NAME !name"  })
    // }

    const pet = new Pets({
        pet_type,
        name, 
        age, 
        gender, 
        characteristics, 
        status, 
    });

    await pet.save();
    // Devuelve una respuesta de éxito
    res.status(201).json({ message: "Mascota creado exitosamente", pet });
  } catch (error) {
    console.error("Error al crear el mascota:", error);
    res.status(500).json(error.message);
  }
};
export default postPet;