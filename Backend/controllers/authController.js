import bcrypt from "bcryptjs";
import User from "../models/User.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
import axios from "axios";
dotenv.config();
// Register User
export const registerUser = async (req, res) => {
  try {
    const { fullName, mobile, email, password } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ mobile });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      fullName,
      mobile,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User Successfully Created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error registering user" });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, mobile, password } = req.body;

    if (!password || (!email && !mobile)) {
      return res.status(400).json({ message: "Identifier and password are required" });
    }

    // Find user by email or mobile
    const user = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, mobile: user.mobile },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRY || "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        mobile: user.mobile,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};
