
 
import express from "express";
import { getAnalytics, getQueueAnalytics, getStaffAnalytics } from "../controllers/analyticsController.js";
import { adminOnly, verifyToken } from "../middleware/authMiddleware.js";
const analyticsRoutes = express.Router();

analyticsRoutes.get("/", verifyToken, adminOnly, getAnalytics);    // Overall Analytics
analyticsRoutes.get("/queue", verifyToken, adminOnly, getQueueAnalytics);      // Queue-wise Analytics
analyticsRoutes.get("/staff", verifyToken, adminOnly, getStaffAnalytics); // Staff analytics

export default analyticsRoutes;
