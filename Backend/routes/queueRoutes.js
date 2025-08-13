


import express from "express";
import { 
  createQueue, 
  checkIn, 
  getQueue, 
  callNext, 
  serveTicket, 
  cancelTicket, 
  markVisiting
} from "../controllers/queueController.js";
import { adminOnly, verifyToken } from "../middleware/authMiddleware.js";

const queueRoutes = express.Router();
// Staff marks ticket as visiting
queueRoutes.post("/visit/:queueId/:ticketNumber", verifyToken, markVisiting);

//  Admin creates new queue
// queueRoutes.post("/create", verifyToken, adminOnly, createQueue);
queueRoutes.post("/create", verifyToken  , adminOnly,createQueue);

//  Get all queues with tickets (Staff & Admin)
queueRoutes.get("/", verifyToken, getQueue);

//  Customer check-in (No auth required - public)
queueRoutes.post("/checkin", checkIn);

//  Staff calls next ticket
queueRoutes.post("/next", verifyToken, callNext);

// Staff serves a ticket
queueRoutes.post("/serve/:queueId/:ticketNumber", verifyToken, serveTicket);

//  Staff cancels a ticket
queueRoutes.post("/cancel/:queueId/:ticketNumber", verifyToken, cancelTicket);

export default queueRoutes;
