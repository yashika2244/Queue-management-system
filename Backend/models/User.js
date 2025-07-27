import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String },
  password: { type: String, required: true },
  otp: String,
  otpExpiry: Date,
});


const User = mongoose.model("User", userSchema);
export default User;
