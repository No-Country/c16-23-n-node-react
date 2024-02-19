import express from "express";

import postPet from "../controller/pets/postPets.js";
import getPets from "../controller/pets/getPets.js";
import shelterRegister from "../controller/register/shelterRegister.js";
import shelterRoutes from "./shelterRoutes.js";
import petRoutes from "./petRoutes.js";
import verified from "../controller/register/verified.js";

const router = express.Router();
router.use("/shelter", shelterRoutes);
router.use("/pet", petRoutes);
router.put("/verify-email", verified);
router.post("/register", shelterRegister);

export default router;
