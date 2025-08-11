import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  avgWaitTime: Number,
  totalServed: Number,
  busiestHour: String,
});

export default mongoose.model("Analytics", analyticsSchema);
