import jwt from "jsonwebtoken";
import Shelters from "../../models/shelters.js";

const verified = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ error: "Token de verificación no proporcionado" });
    }

    const decoded = jwt.verify(token, "secreto");

    const userEmail = decoded.email;

    const shelter = await Shelters.findOne({ email: userEmail });

    if (!shelter) {
      return res.status(404).json({ error: "Refugio no encontrado" });
    }

    shelter.emailVerified = true;

    await shelter.save();

    res
      .status(200)
      .json({ message: "Correo electrónico verificado exitosamente. Ahora tienes acceso permanente a la aplicación." });
  } catch (error) {
    res.status(400).json({ error: "Token de verificación inválido o expirado" });
  }
};

export default verified;
