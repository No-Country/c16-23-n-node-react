import Shelter from "../../models/shelters.js";

const shelterById = async (req, res) => {
  try {
    const { _id } = req.params;

    const shelter = await Shelter.findById(_id);
    return res.json(shelter);
  } catch (error) {
    console.error("Error al buscar refugios por nombre:", error);
    return res.status(500).json({ message: "Hubo un problema al procesar la solicitud" });
    //
  }
};

export default shelterById;
