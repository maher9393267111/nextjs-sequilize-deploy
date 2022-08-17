


import { Sequelize } from 'sequelize'
//import dotenv from "dotenv"
//dotenv.config()

const db = new Sequelize(

    {
        host:'mysql-85749-0.cloudclusters.net',
        username:'maher93',
        password:'maher9393',
        port:'17422',
        database:"mydata",
        dialect:'mysql',
        logging:false,
        dialectOptions: // realizado con ternario ? take : {visu}
            process.env.NODE_ENV === 'production' 
            ? {
                ssl:{
                    require:true,
                    rejectUnauthorized:false
                }
            } :  {}
    
    
    
        }
    


)


  export default db