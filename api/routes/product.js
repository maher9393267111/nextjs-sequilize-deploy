// CreateProduct
import express from "express"
//import registerValidation from "../../middlewares/requestValidations/registerRequestValidation/index.js"
import {CreateProduct} from "../controls/productController.js"
import isAuth from '../utils/requestTokenCheck.js'
const Route = express.Router()



Route.post("/create", CreateProduct )

//Route.post("/login", loginControl )

//logout route
//Route.post("/logout", isAuth,logout )

export default Route