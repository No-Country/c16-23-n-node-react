import Pet from "../models/pets.js";

const petService = {
  createPet: async (data) => {
    try {
      let pet = await Pet.create(data);
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
      const pets = await Pet.find();
      return pets;
    } catch (error) {
      console.error(error);
    }
  },
  getPetById: async (_id) => {
    try {
      const petFound = await Pet.findById(_id);
      return petFound;
    } catch (error) {
      console.error(error);
    }
  },
};

export default petService;
