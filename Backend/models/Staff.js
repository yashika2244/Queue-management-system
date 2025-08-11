// import mongoose from "mongoose";

// const staffSchema = new mongoose.Schema({
//  firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, unique: true },
//   password: String, // hashed
//   role: { type: String, enum: ["staff", "admin"], default: "staff" }
// }, { timestamps: true });

// export default mongoose.model("Staff", staffSchema);

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const staffSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
    role: { type: String, enum: ["staff", "admin"], default: "staff" },
  },
  { timestamps: true }
);

// 🔑 Password hashing before saving
staffSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 🔑 Compare password method
staffSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Staff", staffSchema);
