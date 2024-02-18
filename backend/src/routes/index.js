import express from "express";

import postPet from "../controller/pets/postPets.js";
import getPets from "../controller/pets/getPets.js";
import shelterRegister from "../controller/register/shelterRegister.js";
import shelterRoutes from "./shelterRoutes.js";
import petRoutes from "./petRoutes.js";

const router = express.Router();
router.use("/shelter", shelterRoutes);
router.use("/pet", petRoutes);

router.post("/register", shelterRegister);

export default router;
