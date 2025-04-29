import express from "express";
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
