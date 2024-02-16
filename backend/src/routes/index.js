import express from "express";
import postShelter from "../controller/postShelter.js";
import getShelter from "../controller/getShelter.js";

<<<<<<< HEAD
const router = express.Router();

router.post("/shelter", postShelter);
router.get("/shelter", getShelter);

export default router;
=======

import postPet from "../controller/pets/potsPets.js";
import getPets from "../controller/pets/getPets.js";

router.post("/pet", postPet);
router.get("/pet", getPets);


export default router;
>>>>>>> 3fbeea0f225ba3cbd20c43f0a1f41dba26dd8cc9
