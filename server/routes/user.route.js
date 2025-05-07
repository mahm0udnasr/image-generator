import express from "express";
import userAuth from "../middleware/auth.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  userCredits,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/credits", userAuth, userCredits);

export default router;
