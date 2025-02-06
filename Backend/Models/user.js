const {mongoose}=require("mongoose")
const validator=require("validator")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");

 const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String
    },
    password:{
        type:String
    },
    emailId:{
        type:String, 
        lowercase:true,  
        required: true,
        unique:true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email adress:"+value);
            }
        },
       
    },
    age:{
        type:Number
    }, 
    otp: { type:String
         
    },
    isVerified: { type: Boolean, default: false },
    
 },{ timestamps: true });
  userSchema.methods.getJWT=async function(){
     const user=this;
     const token=jwt.sign({_id:this._id,firstName:this.firstName},"abcdef",{expiresIn:"7d",});
      return token;
  };
   userSchema.methods.validatepassword=async function(passwordInput){
       const user=this;
         
       const passwordhash=user.password;
       const ispassword= await bcrypt.compare(passwordInput,passwordhash);
       return ispassword;
        
   };


  module.exports=mongoose.model("User",userSchema)