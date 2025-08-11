import mongoose from "mongoose";

const displaySchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true },
  message: { type: String },
  activeTickets: [{ ticketNumber: String, counter: Number, service: String }]
});

export default mongoose.model("Display", displaySchema);
