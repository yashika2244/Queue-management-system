import Display from "../models/display.js";

export const getDisplay = async (req, res) => {
  const display = await Display.findOne({ branch: req.params.branchId });
  res.json(display || { message: "No display data yet" });
};

export const updateDisplay = async (req, res) => {
  const { branchId } = req.params;
  const { message, activeTickets } = req.body;

  const display = await Display.findOneAndUpdate(
    { branch: branchId },
    { message, activeTickets },
    { upsert: true, new: true }
  );

  req.io.emit("displayUpdated", display); // Real-time screen update
  res.json({ message: "Display updated", display });
};
