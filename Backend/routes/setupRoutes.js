import express from "express";
import {  getSetupData, saveSetupData } from "../controllers/setupController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const setupRouter = express.Router();

setupRouter.post("/",verifyToken, saveSetupData);
setupRouter.get("/:userId",verifyToken, getSetupData);

export default setupRouter;
