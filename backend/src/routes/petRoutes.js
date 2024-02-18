import express from "express";
import postPet from "../controller/pets/postPets.js";
import getPets from "../controller/pets/getPets.js";
const router = express.Router();

router.post("/", postPet);
router.get("/", getPets);

export default router;
