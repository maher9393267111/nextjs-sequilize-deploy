import{ Sequelize } from 'sequelize'
import db from "../dbConfig/index.js"
import Comments from './CommentsModel.js';


const Products = db.define("products", {
    id:{
    
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
     },
    name: {
      type: Sequelize.TEXT,
      allowNull: false
      
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true
        
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: true
        
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
        
      },
      cat_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    
  });





 

  
export default Products;