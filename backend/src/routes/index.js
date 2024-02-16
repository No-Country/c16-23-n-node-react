import express from "express";
import postShelter from "../controller/postShelter.js";
import getShelter from "../controller/getShelter.js";

import postPet from "../controller/pets/potsPets.js";
import getPets from "../controller/pets/getPets.js";

const router = express.Router();

router.post("/shelter", postShelter);
router.get("/shelter", getShelter);

router.post("/pet", postPet);
router.get("/pet", getPets);

export default router;
