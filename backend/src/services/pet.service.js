import Pet from "../models/pets.js";
import Shelter from "../models/shelters.js";
import { uploadImage, deleteImage } from "../helpers/cloudinary.js";

const petService = {
  createPet: async (data) => {
    try {
      let pet = await Pet.create(data);
      const shelter = await Shelter.findById(data.shelter_id);

      // Agregar el ID de la nueva mascota a la lista de mascotas del refugio
      if (shelter) {
        shelter.pets.push(pet._id);
        await shelter.save();
      }
      // // const {pet_type, name, age, gender, characteristics, shelter_id, status} = data;
      // // const images = {folder: data.folder, url: data.url};
      //   pet = {
      //     pet_type: pet.pet_type,
      //     shelter_id: pet.shelter_id,
      //     name: pet.name,
      //     age: pet.age,
      //     gender: pet.gender,
      //     characteristics: pet.characteristics,
      //     status: pet.status,
      //   };
      const pet1 = await Pet.findById(pet._id).populate("shelter_id", "address name website");

      return pet1;
    } catch (error) {
      console.log(`Error encontrado: ${error.message}`);
    }
  },
  getPets: async () => {
    try {
      const pets = await Pet.find().populate("shelter_id", "address name website");
      return pets;
    } catch (error) {
      console.error(error);
    }
  },
  getPetById: async (_id) => {
    try {
      const petFound = await Pet.findById(_id).populate("shelter_id", "address name website");
      return petFound;
    } catch (error) {
      console.error(error);
    }
  },
};

export default petService;
