import express from "express";
import {
    addClerk,
    getAllClerks,
    toggleClerkAvailability,
} from "../controllers/clerkController.js";

const clerkRoute = express.Router();

clerkRoute.get("/", getAllClerks);
clerkRoute.post("/", addClerk);
clerkRoute.put("/toggle/:id", toggleClerkAvailability);

export default clerkRoute;
