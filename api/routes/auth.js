import express from "express"
//import registerValidation from "../../middlewares/requestValidations/registerRequestValidation/index.js"
import {registerControl , loginControl , logout} from "../controls/registerController.js"
import isAuth from '../utils/requestTokenCheck.js'
const Route = express.Router()



Route.post("/register", registerControl )

Route.post("/login", loginControl )

//logout route
Route.post("/logout", isAuth,logout )

export default Route