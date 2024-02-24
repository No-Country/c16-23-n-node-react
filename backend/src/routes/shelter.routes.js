import express from "express";
import shelterController from "../controller/shelter.controller.js";
const router = express.Router();

router.get("/", shelterController.getShelter);
router.get("/byname", shelterController.shelterByName);
router.get("/:_id", shelterController.shelterById);
router.post("/register", shelterController.shelterRegister);
router.post("/login", shelterController.login);
router.put("/:_id", shelterController.editShelter);
export default router;
