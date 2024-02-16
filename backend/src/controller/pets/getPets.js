import Pets from "../../models/pets.js";

const getPets = async (req, res) => {
    try {
        const pets = await Pets.find();
        return res.status(200).send(pets);
        // return res.status(200).send({"La cantidad de Mascotas es ": pets.length, pets});

    } catch (error) {
        console.error(error);
    }
}

export default getPets;