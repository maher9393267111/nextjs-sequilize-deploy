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
        res.status(500).json({
            message:"error creating new category",
            error:error
        })
    }


}


export const  CreateProduct= async(req,res,next)=>{
console.log(req.body)
    try {
//  create new category
const newProduct = await Products.create({

    
    desc:req.body.name,
    name:req.body.desc,
    price:req.body.price,
    cat_id:req.body.cat_id
})




console.log(newProduct)

// return the new category
res.json({
    message:"new product created",
    newProduct
})

    } catch (error) {
        res.status(500).json({
            message:"error in creating new product",
            error:error
        })
    }


}