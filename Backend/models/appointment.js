import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["booked", "checked-in", "cancelled"], default: "booked" }
});

export default mongoose.model("Appointment", appointmentSchema);
