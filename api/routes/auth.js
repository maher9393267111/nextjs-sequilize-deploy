import express from "express"
//import registerValidation from "../../middlewares/requestValidations/registerRequestValidation/index.js"
import registerControl from "../controls/registerController.js"
const Route = express.Router()


Route.post("/register", registerControl )


export default Route