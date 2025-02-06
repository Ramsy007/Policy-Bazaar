const express =require("express");
const {connectDb}=require("./config/database")


const cookieParser = require("cookie-parser");
const authRouter = require("./Router/auth");
 const app=express();

 app.use(express.json());
 app.use(cookieParser());
 app.use("/",authRouter);
 app.get("/",(req,res)=>{
    res.send("hii from server")
    
 })

  connectDb ()
  .then(()=>{
    console.log("database connection succesfully");
    app.listen(4000,()=>{
      console.log("server is running on  port 4000")
   })
  })
  .catch((err)=>{
   console.error("database cannot be connected!")
  });
 
 

 