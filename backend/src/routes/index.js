import express from "express";

import shelterRegister from "../controller/register/shelterRegister.js";
import shelterRoutes from "./shelterRoutes.js";

import verified from "../controller/register/verified.js";
import petRoute from "./pet.routes.js";

import userRoute from "./user.routes.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/shelter", shelterRoutes);

router.put("/verify-email", verified);
router.post("/register", shelterRegister);
router.use("/pet", petRoute);

export default router;
