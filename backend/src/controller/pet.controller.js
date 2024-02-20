import petService from "../services/pet.service.js"

const petController ={
    createPet : async (req, res)=>{
        try{
            const data = req.body; 
            const pet = await petService.createPet(data); 
            await pet.save();
            return res.status(200).json(pet); 
        } catch (error){
            return res.status(404).json({message: error.message})
        }
    }
}

export default petController