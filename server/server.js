import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;
const app = express();
import userRouter from "./routes/user.route.js";
import imageRouter from "./routes/image.route.js";
// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Connect to MongoDB
await connectDB();

// Routes
app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);
// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
