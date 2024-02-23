import Shelter from "../models/shelters.js";
import jwt from "jsonwebtoken";

const generateTokens = async (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  return token;
};

const shelterService = {
  getShelters: async () => {
    try {
      const shelters = await Shelter.find();
      return shelters;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },
  shelterById: async (_id) => {
    try {
      const shelterFound = await Shelter.findById(_id);
      return shelterFound;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },
  shelterByName: async (name) => {
    try {
      const foundByName = await Shelter.find({ name: { $regex: `.*${name}.*`, $options: "i" } });

      return foundByName;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },

  registerShelter: async (data) => {
    try {
      const newShelter = await Shelter.create(data);
      // if (existingUser) {
      //   return "El correo electrónico ya está en uso";
      // }

      return newShelter;
    } catch (error) {
      throw new Error(`Error encontrado: ${error.message}`);
    }
  },
  login: async (data) => {
    try {
      const { email, password } = data;
      let shelterUser = await Shelter.findOne({ email });
      if (!shelterUser) throw new Error("Email not found");
      if (await shelterUser.verifyPassword(password)) {
        const token = await generateTokens(shelterUser._id);
        shelterUser = {
          name: shelterUser.name,
          userName: shelterUser.userName,
          email: shelterUser.email,
          phone: shelterUser.phone,
          _id: shelterUser._id,
          token,
        };
        return shelterUser;
      } else {
        throw new Error("Password is wrong");
      }
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
};

export default shelterService;
