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
        allowNull: false
        
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false
        
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
        
      },
    //   categ_id: {
    //     type: Sequelize.INTEGER(10),
    //     allowNull: false
    // },
    
  });

  



 

  
export default Products;