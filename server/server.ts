import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World test" });
});

// Uncomment this when you have route files
import userRoutes from "./routes/user.routes";
app.use("/api", userRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
