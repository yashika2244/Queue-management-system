import express from "express";
import {
    assignVisitor,
    clearServedVisitors,
    createVisitor,
    getAllVisitors,
    getCurrentlyServingVisitors,
    getVisitorById,
    getVisitorStats,
    serveVisitor,
} from "../controllers/visitorController.js";


// const visitorRoute = express.Router();

// visitorRoute.get("/", getAllVisitors);
// visitorRoute.post("/", createVisitor);
// visitorRoute.get("/:id", getVisitorById);
// visitorRoute.put("/assign/:id", assignVisitor);
// visitorRoute.put("/serve/:id", serveVisitor);
// visitorRoute.delete("/served", clearServedVisitors);
// visitorRoute.get("/stats", getVisitorStats);
// visitorRoute.get("/serving", getCurrentlyServingVisitors);

const visitorRoute = express.Router();

visitorRoute.get("/serving", getCurrentlyServingVisitors);
visitorRoute.get("/stats", getVisitorStats);

visitorRoute.get("/", getAllVisitors);
visitorRoute.post("/", createVisitor);
visitorRoute.get("/:id", getVisitorById);
visitorRoute.put("/assign/:id", assignVisitor);
visitorRoute.put("/serve/:id", serveVisitor);
visitorRoute.delete("/served", clearServedVisitors);

export default visitorRoute;
