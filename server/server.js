import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
const PORT = process.env.PORT || 5000;
const app = express();
import userRouter from "./routes/user.route.js";
// Middleware
app.use(express.json());
app.use(cors());
// Connect to MongoDB
await connectDB();

// Routes
app.use("/api/users", userRouter);
// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
