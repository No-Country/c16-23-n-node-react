import Pet from "../models/pets.js";
import Shelter from "../models/shelters.js";
import { uploadImage, deleteImage } from "../helpers/cloudinary.js";

const petService = {
  createPet: async (data) => {
    console.log(data);
    try {
      console.log("Envio datos mascotas: ", data); 
      let pet = await Pet.create(data);

      const shelter = await Shelter.findById(data.shelter_id);
      console.log(shelter);
      // Agregar el ID de la nueva mascota a la lista de mascotas del refugio
      if (shelter) {
        shelter.pets.push(pet._id);
        await shelter.save();
      }
      const pet1 = await Pet.findById(pet._id).populate("shelter_id", "address name website");
      return pet1;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  getPets: async () => {
    try {
      const pets = await Pet.find().populate("shelter_id", "address name website adopter");
      return pets;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  getPetById: async (_id) => {
    try {
      const petFound = await Pet.findById(_id).populate("shelter_id", "address name email").populate("adopter");

      return petFound;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  getPetsByFilters: async (size, pet_type, gender, characteristics) => {
    try {
      const queryConditions = [];
      if (size) queryConditions.push({ size: size });
      if (pet_type) queryConditions.push({ pet_type: pet_type });
      if (gender) queryConditions.push({ gender: gender });
      if (characteristics) queryConditions.push({ characteristics: characteristics });
      const petsBySize = await Pet.find({ $and: queryConditions });
      return petsBySize;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
    editPetById: async (data) => {
      try {
        const { id } = data;
        
        const updatedPet = await Pet.findByIdAndUpdate(id,{ adoption_status },  data , { new: true });
  
        if (!updatedPet) {
          throw new Error('Pet not found');
        }
        return updatedPet;
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  deletePetById: async (data) => {
    try {
      let pet = await Pet.deleteOne({ _id: data.id });
      return { message: "Mascota eliminada correctamente" };
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
};

export default petService;
