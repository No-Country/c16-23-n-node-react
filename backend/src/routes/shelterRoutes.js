import express from "express";
import postShelter from "../controller/shelters/postShelter.js";
import getShelter from "../controller/shelters/getShelter.js";
import shelterByName from "../controller/shelters/shelterByName.js";

const router = express.Router();

router.post("/", postShelter);
router.get("/", getShelter);
router.get("/byname", shelterByName); // Esta ruta se convierte en /shelter/byname

export default router;
