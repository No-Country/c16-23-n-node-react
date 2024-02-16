import Refugio from "../../models/shelters.js";

const shelterByName = async (req, res) => {
  try {
    const { name } = req.query;

    const shelters = await Refugio.find({ name: { $regex: `.*${name}.*`, $options: "i" } });
    if (shelters.length === 0) return res.status(404).json({ message: "No se encontraron refugios con ese nombre" });
    return res.json(shelters);
  } catch (error) {
    console.error("Error al buscar refugios por nombre:", error);
    return res.status(500).json({ message: "Hubo un problema al procesar la solicitud" });
  }
};

export default shelterByName;
