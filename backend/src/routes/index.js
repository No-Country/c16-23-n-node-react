import express from "express"
import userRoute from "./user.routes.js"
import petRoute from "./pet.routes.js"
import postShelter from "../controller/postShelter.js";
import getShelter from "../controller/getShelter.js";
const router = express.Router()

router.use('/user', userRoute)
router.use('/pet', petRoute)
router.post("/shelter", postShelter);
router.get("/shelter", getShelter);

export default router;

