import Pet from "../models/pets.js"

const petService =()=>{
    createPet: async (data) =>{
        try {
            let pet = await Pet.create(data);
            pet = {pet_type: pet.pet_type, name: pet.name, age: pet.age, gender: pet.gender, characteristics: pet.characteristics, status: pet.status}
            return pet; 
        } catch (error) {
            console.log(`Error encontrado: ${error.message}`)
        }
    }
}

export default petService;