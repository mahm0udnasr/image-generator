import express from "express";
import userAuth from "../middleware/auth.js";
import { generateImage } from "../controllers/image.controller.js";
const router = express.Router();

router.post("/generate", userAuth, generateImage);

export default router;
