import express from "express";
import { registerStaff, loginStaff, getStaffProfile, getAllStaff, deleteStaff, startFreeTrial } from "../controllers/staffController.js";
import {   adminOnly, verifyToken } from "../middleware/authMiddleware.js";

const staffRoutes = express.Router();

// Public login route
staffRoutes.post("/login", loginStaff);

// Admin-only: register new staff
staffRoutes.post("/register",verifyToken ,adminOnly, registerStaff);

staffRoutes.post("/start-trial", startFreeTrial);
// Staff: view own profile
staffRoutes.get("/profile", verifyToken, getStaffProfile);

// Admin: get all staff
staffRoutes.get("/", verifyToken, adminOnly, getAllStaff);

// Admin: delete staff
staffRoutes.delete("/:id", verifyToken, adminOnly, deleteStaff);

export default staffRoutes;
