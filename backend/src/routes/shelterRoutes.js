import express from "express";

import getShelter from "../controller/shelters/getShelter.js";
import shelterByName from "../controller/shelters/shelterByName.js";

const router = express.Router();

router.get("/", getShelter);
router.get("/byname", shelterByName); // Esta ruta se convierte en /shelter/byname

export default router;
