import Staff from "../models/Staff.js";
import generateToken from "../utils/generateToken.js";

// ✅ Register Staff (Admin Only)
export const registerStaff = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Check if staff already exists
    const existingStaff = await Staff.findOne({ email });
    if (existingStaff) {
      return res.status(400).json({ message: "Staff already exists" });
    }

    // Create staff
    const staff = await Staff.create({ firstName, lastName, email, password, role });

    res.status(201).json({
      _id: staff._id,
      firstName: staff.firstName,
      lastName: staff.lastName,
      email: staff.email,
      role: staff.role,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Staff Login
export const loginStaff = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find staff by email
    const staff = await Staff.findOne({ email });
    if (!staff) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await staff.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Return token & staff details
    res.json({
      _id: staff._id,
      firstName: staff.firstName,
      lastName: staff.lastName,
      email: staff.email,
      role: staff.role,
      token: generateToken(staff._id, staff.role),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get Staff Profile (Protected Route)
export const getStaffProfile = async (req, res) => {
  try {
    res.json(req.staff); // middleware se attach hua staff object
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get All Staff (Admin Only)
export const getAllStaff = async (req, res) => {
  try {
    const staffMembers = await Staff.find().select("-password");
    res.json(staffMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete Staff (Admin Only)
export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);

    if (!staff) return res.status(404).json({ message: "Staff not found" });

    await staff.deleteOne();
    res.json({ message: "Staff removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// controllers/staffController.js
export const startFreeTrial = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // check if already exists
    const existingStaff = await Staff.findOne({ email });
    if (existingStaff) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // default role admin
    const staff = await Staff.create({
      firstName,
      lastName,
      email,
      password,
      role: "admin"
    });

    // token generate
    res.status(201).json({
      _id: staff._id,
      firstName: staff.firstName,
      lastName: staff.lastName,
      email: staff.email,
      role: staff.role,
      token: generateToken(staff._id, staff.role),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
