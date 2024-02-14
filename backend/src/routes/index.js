import express from "express";

const router = express.Router();
import postRefugio from "../controller/postRefugio.js";

router.post("/refugio", postRefugio);

export default router;
