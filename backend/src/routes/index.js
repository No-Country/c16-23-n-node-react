import express from "express";
import postShelter from "../controller/postShelter.js";
import getShelter from "../controller/getShelter.js";

const router = express.Router();

router.post("/shelter", postShelter);
router.get("/shelter", getShelter);

export default router;
