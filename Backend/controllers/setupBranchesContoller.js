
// import Branch from '../models/Branch.js'
// import Service from '../models/Service.js';

// // ✅ Create Branch (Admin Only)
// export const createBranch = async (req, res) => {
//   try {
//     const { name, location } = req.body;

//     const branch = await Branch.create({ name, location });
//     res.status(201).json({ message: "Branch created successfully", branch });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Get All Branches
// export const getBranches = async (req, res) => {
//   try {
//     const branches = await Branch.find();
//     res.json(branches);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Add Service under a Branch
// export const createService = async (req, res) => {
//   try {
//     const { branchId, name, description } = req.body;

//     const branch = await branch.findById(branchId);
//     if (!branch) return res.status(404).json({ message: "Branch not found" });

//     const service = await service.create({ name, description, branch: branchId });
//     res.status(201).json({ message: "Service added successfully", service });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ Get Services by Branch
// export const getServicesByBranch = async (req, res) => {
//   try {
//     const { branchId } = req.params;
//     const services = await Branch.find({ branch: branchId });
//     res.json(services);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

import Branch from "../models/branch.js";
import Service from "../models/service.js";

// ✅ Create Branch (Admin Only)
export const createBranch = async (req, res) => {
  try {
    const { name, location } = req.body;

    const newBranch = await Branch.create({ name, location });  // ✅ Different variable name
    res.status(201).json({ message: "Branch created successfully", branch: newBranch });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get All Branches
export const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add Service under a Branch
export const createService = async (req, res) => {
  try {
    const { branchId, name, description } = req.body;

    const existingBranch = await Branch.findById(branchId);  // ✅ Correct variable
    if (!existingBranch) return res.status(404).json({ message: "Branch not found" });

    const newService = await Service.create({ name, description, branch: branchId });
    res.status(201).json({ message: "Service added successfully", service: newService });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get Services by Branch
export const getServicesByBranch = async (req, res) => {
  try {
    const { branchId } = req.params;
    const services = await Service.find({ branch: branchId });
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
