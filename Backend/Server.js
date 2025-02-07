const express = require("express");
const { connectDb } = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./Router/auth");

const app = express();

// ✅ Configure CORS properly
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow cookies & authentication headers
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Register Routes
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.send("Hi from server");
});

// ✅ Connect to Database and Start Server
const startServer = async () => {
  try {
    await connectDb();
    console.log("✅ Database connected successfully");

    app.listen(4000, () => {
      console.log("🚀 Server is running on port 4000");
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit the process if the DB connection fails
  }
};

// ✅ Start the Server
startServer();
