import express from "express"
import petController from "../controller/pet.controller.js"

const router = express.Router();

router.post("/", petController.createPet);
router.get("/", petController.getPets);
router.get("/:_id", petController.getPetById);
router.put("/:_id", petController.editPetById )

export default router;