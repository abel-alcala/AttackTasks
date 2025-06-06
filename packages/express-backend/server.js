import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./users/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI not in .env file");
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || port, () => {
      console.log("REST API is listening.");
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};



process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise rejection:", err);
  process.exit(1);
});
startServer();
