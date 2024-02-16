import express from "express";
import postShelter from "../controller/shelters/postShelter.js";
import getShelter from "../controller/shelters/getShelter.js";

import postPet from "../controller/pets/potsPets.js";
import getPets from "../controller/pets/getPets.js";

const router = express.Router();

router.post("/shelter", postShelter);
router.get("/shelter", getShelter);

router.post("/pet", postPet);
router.get("/pet", getPets);

export default router;
