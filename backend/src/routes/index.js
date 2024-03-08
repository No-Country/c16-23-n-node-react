import express from "express";

import verified from "../controller/register/verified.js";
import petRoute from "./pet.routes.js";
import shelterRoutes from "./shelter.routes.js";
import userRoute from "./user.routes.js";
// import { donations } from "../controller/mercadopago.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/shelter", shelterRoutes);

router.get("/verify-email", verified);
// router.post("/mercadopago", donations);
router.use("/pet", petRoute);

export default router;
