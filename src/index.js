//require('dotenv').config({path:"./env"})
import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import {app} from "./app.js"
import connectDB from "./db/index.js";
connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("MONGO db connection failed !!! ",err);
})


//const uploadResult = await uploadOnCloudinary("D:\chaiaurbackend\public\temp\mypic.png");

//console.log(uploadResult);
















/*
import express from "express";
const app=express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${
                process.env.PORT
            }`)
        })
    }catch(error){
        console.log("Error: ",error)
        throw err
    }
})()
*/