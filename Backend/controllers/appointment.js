import Appointment from "../models/appointment.js";

export const bookAppointment = async (req, res) => {
  const { name, phone, service, date } = req.body;
  const appointment = await Appointment.create({ name, phone, service, date });
  res.status(201).json({ message: "Appointment booked", appointment });
};

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate("service");
  res.json(appointments);
};

export const cancelAppointment = async (req, res) => {
  const { id } = req.params;
  const cancelled = await Appointment.findByIdAndUpdate(id, { status: "cancelled" }, { new: true });
  res.json({ message: "Appointment cancelled", cancelled });
};
