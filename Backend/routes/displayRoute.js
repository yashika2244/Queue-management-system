import express from "express";
import { updateDisplay, getDisplay } from "../controllers/displayController.js";
import { verifyToken, adminOnly } from "../middleware/authMiddleware.js";

const displayRoutes = express.Router();

displayRoutes.get("/:branchId", getDisplay); // Public display (TV screen)
displayRoutes.post("/update/:branchId", verifyToken, adminOnly, updateDisplay); // Admin updates display

export default displayRoutes;
