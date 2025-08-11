// // import express from "express";
// // import { callNext, cancelTicket, checkIn, getQueue, serveTicket } from "../controllers/queueCOntroller.js";

// // const queueRoutes = express.Router();

// // queueRoutes.post("/checkin", checkIn);        // Customer check-in
// // queueRoutes.get("/", getQueue);               // Get live queue
// // queueRoutes.post("/next", callNext);          // Call next customer
// // queueRoutes.post("/serve/:ticketId", serveTicket); // Mark served
// // queueRoutes.post("/cancel/:ticketId", cancelTicket); // Cancel ticket

// // export default queueRoutes;

// import express from "express";
// import { 
//   callNext, 
//   cancelTicket, 
//   checkIn, 
//   getQueue, 
//   serveTicket, 
//   createQueue 
// } from "../controllers/queueController.js";
// import { verifyToken ,adminOnly} from "../middleware/authMiddleware.js";

// const queueRoutes = express.Router();

// queueRoutes.post("/create", verifyToken, adminOnly, createQueue); // ✅ Admin: Create queue
// queueRoutes.post("/checkin", checkIn);                            // Customer check-in
// queueRoutes.get("/", verifyToken, getQueue);                      // Get live queue (Staff/Admin)
// queueRoutes.post("/next", verifyToken, callNext);                 // Staff: Call next customer
// queueRoutes.post("/serve/:ticketId", verifyToken, serveTicket);   // Staff: Mark served
// queueRoutes.post("/cancel/:ticketId", verifyToken, cancelTicket); // Staff: Cancel ticket

// export default queueRoutes;


import express from "express";
import { 
  createQueue, 
  checkIn, 
  getQueue, 
  callNext, 
  serveTicket, 
  cancelTicket 
} from "../controllers/queueController.js";
import { adminOnly, verifyToken } from "../middleware/authMiddleware.js";

const queueRoutes = express.Router();

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
