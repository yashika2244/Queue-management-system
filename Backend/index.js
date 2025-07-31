import dotenv from "dotenv";
dotenv.config();
console.log("Testing .env JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import queueRouter from "./routes/queueRoutes.js";
import visitorRoute from "./routes/visitorRoutes.js";
import clerkRoute from "./routes/clerkRoutes.js";
import authRoute from "./routes/userRoutes.js";


const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth',authRoute)
app.use('/api/token',queueRouter)
app.use("/api/visitors", visitorRoute);
app.use("/api/clerks", clerkRoute);
// DB Connect & Start Server
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
