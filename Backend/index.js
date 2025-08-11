// import dotenv from "dotenv";
// dotenv.config();
// console.log("Testing .env JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);
// import express from "express";
// import cors from "cors";
// import connectDB from "./config/db.js";

// import authRoute from "./routes/userRoutes.js";
// import setupRouter from "./routes/setupRoutes.js";


// const app = express();

// // Middleware
// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"],
//   credentials: true,
// }));
// app.use(express.json());

// // Routes
// app.use('/api/auth',authRoute)
// app.use('/api/setup',setupRouter)
// // DB Connect & Start Server
// connectDB().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`Server running on port ${process.env.PORT}`);
//   });
// });


import dotenv from "dotenv";
dotenv.config();
console.log("token is ", process.env.JWT_SECRET)
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import { setupQueueSocket } from "./socket/queueSocket.js";
import setupRouter from "./routes/setupRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import queueRoutes from './routes/queueRoutes.js'
import setupBranchesRoute from "./routes/BranchesRoute.js";
import displayRoutes from "./routes/displayRoute.js";
import feedbackRoutes from "./routes/feedbookRoute.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
connectDB();



const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});


// ✅ Attach io to every request
app.use((req, res, next) => {
  req.io = io;
  next();
});
// Routes
app.use("/api/queue", queueRoutes);
app.use('/api/setup',setupRouter)
app.use("/api/staff", staffRoutes);        // Staff APIs (login/register/admin)
app.use("/api/analytics", analyticsRoutes); // Analytics APIs (admin only)
app.use('/api/setupBranches',setupBranchesRoute)
app.use("/api/display", displayRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/appointments", appointmentRoutes);
// HTTP server for socket.io


// Setup socket events
setupQueueSocket(io)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
