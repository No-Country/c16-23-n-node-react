import express from "express";
import userController from "../controller/user.controller.js"

const router = express.Router();


router.post("/", userController.createUser)
router.put("/:id", userController.editUser)

router.post("/login", userController.login)



export default router;