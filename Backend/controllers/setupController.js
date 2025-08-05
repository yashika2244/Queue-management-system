import setupModel from "../models/setupModel.js";

export const saveSetupData = async (req, res) => {
  try {
    const { userId, ...formData } = req.body;

    // Check if setup already exists for this user
    const existingSetup = await setupModel.findOne({ user: userId });

    if (existingSetup) {
      // Update existing setup
      const updatedSetup = await setupModel.findOneAndUpdate(
        { user: userId },
        { $set: formData },
        { new: true, runValidators: true }
      );
      return res.status(200).json({ message: "Setup updated successfully", data: updatedSetup });
    }

    // Else create a new setup
    const newSetup = await setupModel.create({ user: userId, ...formData });
    res.status(201).json({ message: "Setup saved successfully", data: newSetup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save setup", error: error.message });
  }
};

// Get setup data by userId
export const getSetupData = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) return res.status(400).json({ message: "User ID is required" });

    const setupData = await setupModel.findOne({ user: userId });
    if (!setupData) return res.status(404).json({ message: "No setup data found" });

    res.json({ data: setupData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
