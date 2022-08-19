

import dbConfig from './freesql.js'
import { Sequelize } from 'sequelize'
//import Products from '../models/productModel.js';
//import Categories from '../models/CommentsModel.js';
//import dotenv from "dotenv"
//dotenv.config()


const db = new Sequelize(

    {
        host:'mysql-85749-0.cloudclusters.net',
        username:'maher93',
        password:'maher9393',
        port:'17422',
        database:"maherdata",
        dialect:'mysql',
      
    
         logging:false,
         dialectOptions: // realizado con ternario ? take : {visu}
            process.env.NODE_ENV === 'production' 
            ? {

                ssl:{
                    require:true,
                    rejectUnauthorized:false
                }
            } :  {},
       
    
   
    
        }
    
)



// const db = new Sequelize(

//     // 🚦🚦🚦 work for freesql deploy and localhost

//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD, {
//         host: dbConfig.HOST,
//         dialect: dbConfig.dialect,
//         operatorsAliases: false,
// //logging:true,
//         pool: {
//             max: dbConfig.pool.max,
//             min: dbConfig.pool.min,
//             acquire: dbConfig.pool.acquire,
//             idle: dbConfig.pool.idle

//         }
//     }

// )



await db.authenticate().then(()=>{
    console.log("conected to the database!!")
}).catch(error=>{
    console.log("Unable to connect to the database " + error )
} )
        
await db.sync().then(()=>{
    console.log("tables created")
}).catch(error=>{
    console.log("Unable to create tables " + error )
} )









  export default db