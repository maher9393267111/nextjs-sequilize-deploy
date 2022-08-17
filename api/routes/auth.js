import express from "express"
//import registerValidation from "../../middlewares/requestValidations/registerRequestValidation/index.js"
import {registerControl , loginControl } from "../controls/registerController.js"
const Route = express.Router()


Route.post("/register", registerControl )

Route.post("/login", loginControl )

export default Route