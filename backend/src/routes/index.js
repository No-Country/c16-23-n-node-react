import express from "express"
import userRoute from "./user.routes.js"
import petRoute from "./pet.routes.js"

const router = express.Router()

router.use('/user', userRoute)
router.use('/pet', petRoute)

export default router
