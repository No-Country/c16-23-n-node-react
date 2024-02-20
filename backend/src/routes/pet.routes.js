import express from "express"
import petController from "../controller/pet.controller.js"

const router = express.Router();

router.post("/pet", petController.createPet);
// router.get("/pet", getPets);
// router.get("/pet/:id", getPetsId);

export default router;