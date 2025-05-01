import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/*
 @desc    Register a new user
 @route   POST /api/users/register
 @access  Public
 @method  POST
*/
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid user data, please try register again.",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

/*
  @desc    Login user
  @route   POST /api/users/login
  @access  Public
  @method  POST
*/
const loginUser = async (req, res) => {};

/*
  @desc   Logout user
  @route   POST /api/users/logout
  @access  Private
  @method  POST
*/
const logoutUser = async (req, res) => {};

/*
  @desc    Get all users
  @route   GET /api/users
  @access  Private/Admin
  @method  GET
*/
const getUsers = async (req, res) => {};

/*
  @desc    Get user by ID
  @route   GET /api/users/:id
  @access  Private/Admin
  @method  GET
*/
const getUserById = async (req, res) => {};

/* 
  @desc    Get user profile
  @route   GET /api/users/profile
  @access  Private
  @method  GET
*/
const getUserProfile = async (req, res) => {};

/*
  @desc    Update user profile
  @route   PUT /api/users/profile
  @access  Private
  @method  PUT
*/
const updateUserProfile = async (req, res) => {};

/*
  @desc    Delete user by ID
  @route   DELETE /api/users/:id
  @access  Private/Admin
  @method  DELETE
*/
const deleteUserProfile = async (req, res) => {};

/*
  @desc   Forget password
  @route   POST /api/users/forget-password
  @access  Public
  @method  POST
*/
const forgetPassword = async (req, res) => {};

/*
  @desc   Reset password
  @route   POST /api/users/reset-password/:token
  @access  Public
  @method  POST
*/
const resetPassword = async (req, res) => {};

/*
  @desc   Update user credit balance
  @route   PUT /api/users/credit-balance
  @access  Admin
  @method  PUT
*/
const updateUserCreditBalance = async (req, res) => {};

/*
  @desc   Update user admin status
  @route   PUT /api/users/admin-status
  @access  Admin
  @method  PUT
*/
const updateUserAdminStatus = async (req, res) => {};
