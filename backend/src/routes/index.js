import express from "express";
import postRefugio from "../controller/postRefugio.js";
import getRefugio from "../controller/getRefugio.js";

const router = express.Router();

router.post("/refugio", postRefugio);
router.get("/refugio", getRefugio);

export default router;
