// //models

// const { Cart } = require("./carts.model");
// const { Order } = require("./orders.model");
// const { Product } = require("./productModel");
// const { ProductsInCart } = require("./productsInCart");
// const { User } = require("../models/user.model");


// const initModels = () => {
//   // 1 User <----> M P
//   User.hasMany(Product);
//   Product.belongsTo(User);

//   // 1 user <----> M Order
//   User.hasMany(Order) //throughout cart;
//   Order.belongsTo(User)  //throughout cart ;

//    // 1 User <--> 1 Cart
//    User.hasOne(Cart);
//    Cart.belongsTo(User);
 
//    // M Cart <--> M Product
//    Cart.belongsToMany(Product, { through: ProductsInCart });
//    Product.belongsToMany(Cart, { through: ProductsInCart });
 
//    // 1 Order <--> 1 Cart
//    Cart.hasOne(Order);
//    Order.belongsTo(Cart);

// };

// module.exports = { initModels };