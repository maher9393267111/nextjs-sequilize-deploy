
const PORT = process.env.PORT || 5000;
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import db from "./dbConfig/index.js"
import morgan from "morgan"
dotenv.config()
const app = express()
//const {sequelize} = require("./dbConfig/index")

app.use(cors());
app.use(express.json());
// use morgan to log requests to the console
app.use(morgan('dev'));
import auth from "./routes/auth.js"
import category from "./routes/category.js"

app.get("/api/test", (req, res) => {

    res.send("Hello World");
}
);

app.use("/api/auth", auth)
app.use("/api/category", category)



// app.listen(PORT, () => {
//     console.log("Now listening on 🙄🙄🙄 " + PORT);
//   });

async function starting(){

    try{
        //database conection and tables creation....

      //  await db.authenticate();
        
     //   await db.sync()
        // await db.drop()
        console.log("conected to the database!!")
        

        app.listen(PORT, ()=>console.log("server runnin in port " + PORT))
    }
    catch(error){

        console.log("Unable to connect to the database " + error )

    }
} 

starting()