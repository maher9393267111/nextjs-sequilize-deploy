import db from "../models";

// create main Model
const Product = db.products
const Review = db.reviews

export  const addProduct = async (req, res) => {

// convert price string to number
    const { price } = req.body
    req.body.price = parseFloat(price)

    let info = {
      //  image: req.file.path,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}


// get all products

export const getProducts = async (req, res) => {

    const products = await Product.findAll()
    res.status(200).send(products)
    console.log(products)

}