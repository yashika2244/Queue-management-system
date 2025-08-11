import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  ticketNumber: { type: String, required: true },
  service: { type: String, required: true },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Feedback", feedbackSchema);
