import{ Sequelize } from 'sequelize'
import db from "../dbConfig/index.js"
import Products from './productModel.js';

const Categories = db.define("categories", {
    id:{
    

        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
     },
    desc: {
      type: Sequelize.TEXT,
      allowNull: false
      
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
        
      }
    
  },{ freezeTableName: true});


//   Categories.hasMany(Products,
//     {
//       onDelete: 'cascade',
//     //  foreignKey: { allowNull: false },
//       hooks: true 
       
//     })
// Products.hasOne(Categories,
//     {


//       onDelete: 'cascade',
//       foreignKey: { allowNull: false },
//       hooks: true 
       
//     })



// Categories.hasMany(Products, {
//     foreignKey: 'cat_id',
//     as: 'product'
// })



// Products.belongsTo(Categories, {
//     foreignKey: 'cat_id',
//     as: 'category'
// })




  
export default Categories;