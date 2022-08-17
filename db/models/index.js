const dbConfig = require('../config.js');
import { initModels } from './initmodel.js';
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(

    // 🚦🚦🚦 work for freesql deploy and localhost

    // dbConfig.DB,
    // dbConfig.USER,
    // dbConfig.PASSWORD, {
    //     host: dbConfig.HOST,
    //     dialect: dbConfig.dialect,
    //     operatorsAliases: false,

     
      


    //     pool: {
    //         max: dbConfig.pool.max,
    //         min: dbConfig.pool.min,
    //         acquire: dbConfig.pool.acquire,
    //         idle: dbConfig.pool.idle

    //     }
    // }

// 🚦🚦🚦 workkk for Cloud Cluster deployment


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

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./user.model')(sequelize, DataTypes)
//db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })





module.exports = db