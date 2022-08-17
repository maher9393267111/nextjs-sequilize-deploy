import Products from "../models/productModel.js"
import Categories from "../models/categoryModel.js"

export const  CreateCategory= async(req,res,next)=>{

    try {
//  create new category
const newCategory = await Categories.create({

    
    desc:req.body.desc,
    name:req.body.name
})



console.log(newCategory)

// return the new category
res.json({
    message:"new category created",
    newCategory
})

    } catch (error) {
        next(error)
    }


}