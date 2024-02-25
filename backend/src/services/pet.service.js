import Pet from "../models/pets.js";
import {uploadImage, deleteImage} from "../helpers/cloudinary.js"; 

const petService = {
  createPet: async (data) => {
    try {
      // // const {pet_type, name, age, gender, characteristics, shelter_id, status} = data; 
      // // const images = {folder: data.folder, url: data.url}; 
      let pet = await Pet.create(data);
      const pet1 = await Pet.findById(pet._id).populate("shelter_id", "address name website");
      return pet1;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  getPets: async () => {
    try {
      const pets = await Pet.find();
      return pets;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  getPetById: async (_id) => {
    try {
      const petFound = await Pet.findById(_id);
      return petFound;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  editPetById: async (data) =>{
    try {
      let pet = await Pet.findByIdAndUpdate(data.id, data, { new: true });
      return pet
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }, 
  deletePetById: async (data) =>{
    try {
      let pet = await Pet.deleteOne({_id: data.id});
      return { message: 'Mascota eliminada correctamente' };
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
};


export default petService;