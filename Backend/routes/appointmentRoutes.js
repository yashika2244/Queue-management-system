import express from "express";
import { bookAppointment, getAppointments, cancelAppointment } from "../controllers/appointment.js";
import { verifyToken, adminOnly } from "../middleware/authMiddleware.js";

const appointmentRoutes = express.Router();

appointmentRoutes.post("/book", bookAppointment); // Public booking
appointmentRoutes.get("/", verifyToken, adminOnly, getAppointments); // Admin view
appointmentRoutes.post("/cancel/:id", verifyToken, cancelAppointment); // Cancel

export default appointmentRoutes;