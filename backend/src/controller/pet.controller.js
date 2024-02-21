import petService from "../services/pet.service.js"

const petController ={
    createPet : async (req, res)=>{
        try{
            const data = req.body; 
            const pet = await petService.createPet(data); 
            return res.status(201).json(pet); 
        } catch (error){
            return res.status(404).json({message: error.message})
        }
    }, 
    getPets : async (req, res)=>{
        try {
            const pets = await petService.getPets(); 
            // return res.status(200).send({"La cantidad de Mascotas es ": pets.length, pets});
            return res.status(200).json(pets);
        } catch (error) {
            return res.status(404).json({message: error.message})
        }
    },
    getPetById : async (req, res)=>{
        try {
            const id = req.params; 
            console.log(id);
            const petFound = await petService.getPetById(id); 
            return res.status(200).json(petFound)
        } catch (error) {
            return res.status(404).json({message: error.message})
        }
    }
}

export default petController