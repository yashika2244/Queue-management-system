import express from "express";
import { getCurrentUser, loginUser, signup } from "../controllers/authController.js";
import verifyToken from "../middleware/authMiddleware.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", loginUser);
authRoute.get("/me",verifyToken, getCurrentUser);
export default authRoute;
