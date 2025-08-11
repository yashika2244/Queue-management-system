import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch", required: true }
});

export default mongoose.model("Service", serviceSchema);
