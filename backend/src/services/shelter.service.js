import Shelter from "../models/shelters.js";
import jwt from "jsonwebtoken";

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
      // if (data.email) {
      //   return "El correo electrónico ya está en uso";
      // }
      const { email } = data;
      const userFound = await Shelter.findOne({ email: email });
      if (userFound) {
        throw new Error("El correo electrónico ya está en uso");
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
