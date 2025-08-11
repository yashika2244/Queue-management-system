import express from "express";
import { submitFeedback, getFeedback } from "../controllers/feedBookController.js";
import { verifyToken, adminOnly } from "../middleware/authMiddleware.js";

const feedbackRoutes = express.Router();

feedbackRoutes.post("/", submitFeedback); // Public feedback submission
feedbackRoutes.get("/", verifyToken, adminOnly, getFeedback); // Admin views feedback

export default feedbackRoutes;
