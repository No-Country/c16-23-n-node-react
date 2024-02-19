import express from "express"
const router = express.Router()


import postPet from "../controller/pets/potsPets.js";
import getPets from "../controller/pets/getPets.js";
import getPetsId from " "

router.post("/pet", postPet);
router.get("/pet", getPets);
router.get("/pet/:id", getPetsId);



export default router;