import express from "express";
import { createBranch, createService, getBranches, getServicesByBranch } from "../controllers/setupBranchesContoller.js";
import { verifyToken ,adminOnly} from "../middleware/authMiddleware.js";

const setupBranchesRoute = express.Router();

// Branch APIs
setupBranchesRoute.post("/branch", verifyToken, adminOnly, createBranch);
setupBranchesRoute.get("/branches", verifyToken, adminOnly, getBranches);

// Service APIs
setupBranchesRoute.post("/service", verifyToken, adminOnly, createService);
setupBranchesRoute.get("/services/:branchId", getServicesByBranch);

export default setupBranchesRoute;
