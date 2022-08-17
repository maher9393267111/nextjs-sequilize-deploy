import bcryptjs from "bcryptjs"
import Users from "../models/UserModel.js"

import loginTokenGenerate from "../utils/loginTokenGenerate.js"


// function for controling the insert of the user, passes the error of the database to the next middleware if there is anny, hashes the password before insert
export const  registerControl = async(req,res,next)=>{


    const {name, email, last_name,password} = req.body
   

    //hashing the password
    bcryptjs.hash(password.toString(),10,(error, hashedPassword)=>{

        if(error){
            const error = new Error("cant hash the password ")
            error.status=500
            next(error)
        }
        //if there is no error in the hash, create the user
        else{

            Users.create({
                user_name:name,
                user_last_name:last_name,
                user_email:email,
                hashedPassword
                
            })
            .then(result=>{res.json(result)})
            //anny errors like duplicate email or null data are catch in here
            .catch(error=>{
                
                const err = new Error( "database validation error")
                err.status = 500
                next(err)
            })

            

        }

   })

        
}

    


export const  loginControl = async(req,res,next) =>{

    const data = req.body
    const formPassword = data.password.toString()

    //first find the user that match the email
    Users.findAll({where:{user_email:data.email}})
    .then(result=>{

        if(result.length>0){

            const dbUser=result[0]

            //compare passwords
            bcryptjs.compare(formPassword, dbUser.hashedPassword).then((response) => {

                if(response){
                    //do the update of the isLogIn propertie in database to TRUE, and send the token to the user
                    Users.update({isLogIn:true},{where:{user_email: dbUser.user_email}})
                    .then(userUpdated=> res.json({message:"user Updated", token: loginTokenGenerate(dbUser)}))

                    //ERRORS IN THE UPDATE
                    .catch(err=>{
                        const error= new Error("user cant be updated")
                        error.status=500
                        next(error)
                    })
                }
                //ERRORS IN THE PASSWORD MATCHIN
                else{
                    res.json({message:"wrong password"})
                }

            });

        }
        else{
            //ERRORS IN THE FINDING OF THE USER
            const error = new Error("no user found, you have to register first")
            error.status=400
            next(error)
        }
    })
    

    
    
}



export const  logout = async(req,res,next)=>{

    const {id,email} = req.user
 
    Users.update({isLogIn:false}, {where:{user_id: id}})
 
    .then(result=>res.json({result, message:"user log out"}))
 
    .catch(()=>{
     const err = new Error("cant log out the user, there is a problem whit the database")
     err.status=500
     next(err)
    })
 
 }



