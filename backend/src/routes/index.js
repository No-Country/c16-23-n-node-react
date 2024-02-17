import express from "express";
import postShelter from "../controller/shelters/postShelter.js";
import getShelter from "../controller/shelters/getShelter.js";
import shelterByName from "../controller/shelters/shelterByName.js";
import postPet from "../controller/pets/potsPets.js";
import getPets from "../controller/pets/getPets.js";
import shelterRegister from "../controller/register/shelterRegister.js";

const router = express.Router();

router.post("/shelter", postShelter);
router.get("/shelter", getShelter);
router.get("/shelterbyname", shelterByName);
router.post("/pet", postPet);
router.get("/pet", getPets);
router.post("/register", shelterRegister);

export default router;
