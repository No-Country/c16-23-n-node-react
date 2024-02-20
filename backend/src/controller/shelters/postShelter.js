//funcion de prueba para el posteo de refugios

import Shelter from "../../models/shelters.js";

const postShelter = async (req, res) => {
  try {
    const { name, userName, password, phone, email, adress, website, instagram, description, image } = req.body; // Extrae los datos del cuerpo de la solicitud

    const existingReShelter = await Shelter.findOne({ email });
    if (existingShelter) {
      return res.status(400).json({ message: "Ya existe un refugio con este correo electrónico" });
    }

    const shelter = new Shelter({
      name,
      userName,
      password,
      phone,
      email,
      adress,
      website,
      instagram,
      description,
      image,
    });

    await shelter.save();

    // Devuelve una respuesta de éxito
    res.status(201).json({ message: "Refugio creado exitosamente", refugio });
  } catch (error) {
    console.error("Error al crear el refugio:", error);
    res.status(500).json({ message: "Hubo un problema al procesar la solicitud" });
  }
};
export default postShelter;
