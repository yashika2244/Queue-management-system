import mongoose from "mongoose";

const clerkSchema = new mongoose.Schema({
  name: String,
  deskNumber: Number,
  isAvailable: { type: Boolean, default: true },
});

export default mongoose.model("Clerk", clerkSchema);
