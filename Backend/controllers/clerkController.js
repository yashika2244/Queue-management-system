import Clerk from "../models/Clerk.js";

// GET all clerks
export const getAllClerks = async (req, res) => {
  try {
    const clerks = await Clerk.find();
    res.json(clerks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Toggle clerk desk availability
export const toggleClerkAvailability = async (req, res) => {
  try {
    const updatedClerk = await Clerk.findById(req.params.id);
    updatedClerk.isAvailable = !updatedClerk.isAvailable;
    await updatedClerk.save();
    res.json(updatedClerk);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Add new clerk
export const addClerk = async (req, res) => {
  try {
    const newClerk = new Clerk(req.body);
    await newClerk.save();
    res.status(201).json(newClerk);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
