import jwt from "jsonwebtoken";
import Shelters from "../../models/shelters.js";

const verified = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ error: "Token de verificación no proporcionado" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const shelter = await Shelters.findOne({ _id: decoded.userId });

    if (!shelter) {
      return res.status(404).json({ error: "Refugio no encontrado" });
    }

    shelter.emailVerified = true;

    await shelter.save();
    const url = "https://c16-23-n-node-react-eta.vercel.app/";
    res.redirect(url);
  } catch (error) {
    res.status(400).json({ error: "Token de verificación inválido o expirado" });
  }
};

export default verified;
