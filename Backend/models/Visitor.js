import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  name: String,
  service: String,
  assignedTo: { type: String, default: null },
  status: { type: String, enum: ["waiting", "serving", "served"], default: "waiting" },
  createdAt: { type: Date, default: Date.now },
  startedAt: { type: Date, default: null },
});

export default mongoose.model("Visitor", visitorSchema);
