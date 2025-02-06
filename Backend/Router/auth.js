const express=require("express");
const authRouter=express.Router();
const {validationvalue}=require("../utills/validation")
const bcrypt=require("bcrypt");
const User=require("../models/user")
const validator=require("validator");
const jwt=require("jsonwebtoken")


const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const {sendOTPEmail}=require("../utills/sendingmail")

authRouter.post("/signup", async (req, res) => {
  try {
    validationvalue(req);
    const { firstName, lastName, emailId, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate OTP
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false });

    // Hash password
    const passwordhash = await bcrypt.hash(password, 10);

    // Save user with OTP (unverified)
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordhash,
      otp, // Store OTP in the DB
      isVerified: false, // User is not verified yet
    });

    await user.save();

    // Send OTP via Email
    await sendOTPEmail(emailId, otp);

    res.json({ message: "OTP sent to email. Please verify OTP." });
  } catch (err) {
    res.status(400).send("Error while signing up: " + err.message);
  }
});

authRouter.post("/verify-otp", async (req, res) => {
    try {
      const { emailId, otp } = req.body;
  
      const user = await User.findOne({ emailId });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (user.otp !== otp) {
        return res.status(400).json({ message: "Invalid OTP" });
      }
  
      // Mark user as verified
      user.isVerified = true;
      user.otp = null; // Remove OTP after successful verification
      await user.save();
  
      res.json({ message: "OTP verified successfully! You can now log in." });
    } catch (err) {
      res.status(400).send("Error while verifying OTP: " + err.message);
    }
  });
  
  


authRouter.post("/login",async(req,res)=>{
    try{
     const {emailId,password}=req.body;
     //  console.log(req.body);
    if(!validator.isEmail(emailId)){
      throw new Error("email not valid")
    }
    console.log(emailId);
    const user=await User.findOne({emailId:emailId});
    
    if(!user){
     throw new Error("Invalid Credentials");
    }
   //  console.log(emailId);
    const ispassword=await user.validatepassword(password);
    

    if(ispassword){
       const token=await user.getJWT();
       console.log(token);
      //  const decoded = jwt.decode(token);
      //  console.log(decoded); // This is a JSON object
       res.cookie("token",token,{expires:new Date(Date.now()+2*3600000)});
        res.send(user)
    }
    else{
       throw new Error("invalid credentials")
     
    }
    }
    catch(err){
        res.status(400).send("error while login" + err.message);
    }

 })
 authRouter.post("/logout",async(req,res)=>{
      res.cookie("token",null,
      {expires:new Date(Date.now())});
      res.send("user logout successfully");
 })







 module.exports=authRouter;