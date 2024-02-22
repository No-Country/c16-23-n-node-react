import express from "express";

import getShelter from "../controller/shelters/getShelter.js";
import shelterByName from "../controller/shelters/shelterByName.js";
import getShelterById from "../controller/shelters/getShelterById.js";

const router = express.Router();

router.get("/", getShelter);
router.get("/byname", shelterByName);
router.get("/:_id", getShelterById);

export default router;
