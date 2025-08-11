import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true }
});

export default mongoose.model("Branch", branchSchema);
