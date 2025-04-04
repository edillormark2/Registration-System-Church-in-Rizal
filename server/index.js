import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import regRoutes from "./routes/registration.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(err);
  });

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);
app.use(express.json());
app.use("/server/registration", regRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
