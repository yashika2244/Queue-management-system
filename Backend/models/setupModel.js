import mongoose from "mongoose";

const setupSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    companyName: { type: String },
    country: { type: String },
    phone: { type: String },
    industry: { type: [String] },
    industryOther: { type: String },
    visitors: { type: String },
    visitType: { type: String },
    problems: { type: [String] },
    problemsOther: { type: String },
    solutions: { type: [String] },
    solutionsOther: { type: String },
    referral: { type: [String] },
    referralOther: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Setup", setupSchema);
