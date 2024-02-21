
import express from "express";

import postPet from "../controller/pets/postPets.js";
import getPets from "../controller/pets/getPets.js";
import shelterRegister from "../controller/register/shelterRegister.js";
import shelterRoutes from "./shelterRoutes.js";
import petRoutes from "./petRoutes.js";
import verified from "../controller/register/verified.js";
import petRoute from "./pet.routes.js"
import postShelter from "../controller/postShelter.js";
import userRoute from "./user.routes.js";
import getShelter from "../controller/getShelter.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/shelter", shelterRoutes);

router.put("/verify-email", verified);
router.post("/register", shelterRegister);
router.use('/pet', petRoute)












export default router;

