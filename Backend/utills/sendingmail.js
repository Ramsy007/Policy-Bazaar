const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your app password
    },
  });
  
  const sendOTPEmail = async (email, otp) => {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Your OTP for Signup Verification",
        text: `Your OTP for verification is: ${otp}. It will expire in 10 minutes.`,
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  module.exports={sendOTPEmail};
  