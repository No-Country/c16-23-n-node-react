import express from "express"
const router = express.Router()


import postPet from "../controller/pets/potsPets.js";
import getPets from "../controller/pets/getPets.js";

router.post("/pet", postPet);
router.get("/pet", getPets);


export default router;