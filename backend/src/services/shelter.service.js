import Shelter from "../models/shelters.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};
const shelterService = {
  getShelters: async () => {
    try {
      const shelters = await Shelter.find().populate("pets", "name age images");

      return shelters;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },
  shelterById: async (_id) => {
    try {
      const shelterFound = await Shelter.findById(_id).populate("pets", "name images");
      if (!shelterFound) return "No se encontró el refugio";

      return shelterFound;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },
  shelterByName: async (name) => {
    try {
      const foundByName = await Shelter.find({ name: { $regex: `.*${name}.*`, $options: "i" } }).populate("pets");

      return foundByName;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },
  editShelter: async (data) => {
    try {
      let shelter = await Shelter.findByIdAndUpdate(data.id, data.data, { new: true });

      return shelter;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  registerShelter: async (data) => {
    try {
      const { email } = data;
      const userFound = await Shelter.findOne({ email: email });
      if (userFound) {
        throw new Error("El correo electrónico ya está en uso");
      }
      const { name, userName, password } = data;
      if (!name || !userName || !password ) {
        throw new Error("Falta información");
      }
      const newShelter = await Shelter.create(data);

      return newShelter;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  login: async (data) => {
    try {
      const { email, password } = data;
      let shelterUser = await Shelter.findOne({ email });

      if (!shelterUser || shelterUser.emailVerified === false) throw new Error("Email o Contraseña no válidas");
      if (shelterUser.verifyPassword(password)) {
        const token = generateToken(shelterUser._id);
        shelterUser = {
          name: shelterUser.name,
          userName: shelterUser.userName,
          email: shelterUser.email,
          phone: shelterUser.phone,
          _id: shelterUser._id,
          token,
        };
        return shelterUser;
      }
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
};

export default shelterService;
