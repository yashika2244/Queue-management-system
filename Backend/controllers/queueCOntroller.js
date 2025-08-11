// import Queue from "../models/queue.js"
// export const createQueue = async (req, res) => {
//   try {
//     const { name, description, maxLimit } = req.body;

//     const queue = await Queue.create({
//       name,
//       description,
//       maxLimit,
//       lastTicket: 0
//     });

//     res.status(201).json({ message: "Queue created successfully", queue });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// // Helper: Generate ticket ID (A + number)
// let ticketCounter = 1;
// const generateTicketId = () => `A${ticketCounter++}`;

// // ✅ 1. Customer Check-in
// export const checkIn = async (req, res) => {
//   try {
//     const { name, phone, service } = req.body;
//     const ticketId = generateTicketId();

//     const newTicket = await Queue.create({ name, phone, service, ticketId });
//     req.io.emit("queueUpdated"); // Notify all screens

//     res.status(201).json(newTicket);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ 2. Get Live Queue
// export const getQueue = async (req, res) => {
//   try {
//     const queue = await Queue.find({ status: "waiting" }).sort("checkInTime");
//     res.json(queue);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ 3. Call Next Customer
// export const callNext = async (req, res) => {
//   try {
//     const { counter } = req.body;
//     const nextTicket = await Queue.findOneAndUpdate(
//       { status: "waiting" },
//       { status: "called", callTime: new Date(), counter },
//       { new: true, sort: { checkInTime: 1 } }
//     );

//     if (!nextTicket) return res.status(404).json({ message: "No waiting customer" });

//     req.io.emit("customerCalled", nextTicket);
//     res.json(nextTicket);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ 4. Serve Ticket
// export const serveTicket = async (req, res) => {
//   try {
//     const { ticketId } = req.params;
//     const served = await Queue.findOneAndUpdate(
//       { ticketId },
//       { status: "served", serveTime: new Date() },
//       { new: true }
//     );

//     req.io.emit("queueUpdated");
//     res.json(served);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // ✅ 5. Cancel Ticket
// export const cancelTicket = async (req, res) => {
//   try {
//     const { ticketId } = req.params;
//     const cancelled = await Queue.findOneAndUpdate(
//       { ticketId },
//       { status: "cancelled" },
//       { new: true }
//     );

//     req.io.emit("queueUpdated");
//     res.json(cancelled);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


import Queue from "../models/queue.js";
import { sendSMS } from "../utils/sendSMS.js";
import { sendEmail } from "../utils/sendEmail.js";
//  1. Create Queue (Admin Only)
export const createQueue = async (req, res) => {
  try {
    const { name, description, maxLimit } = req.body;

    const queue = await Queue.create({
      name,
      description,
      maxLimit,
      lastTicket: 0,
      tickets: []
    });

    res.status(201).json({ message: "Queue created successfully", queue });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  2. Customer Check-in
// export const checkIn = async (req, res) => {
//   try {
//     const { queueId, customerName } = req.body;

//     const queue = await Queue.findById(queueId);
//     if (!queue) return res.status(404).json({ message: "Queue not found" });

//     queue.lastTicket += 1;
//     const ticket = {
//       ticketNumber: queue.lastTicket,
//       customerName,
//       status: "waiting",
//       createdAt: new Date()
//     };

//     queue.tickets.push(ticket);
//     await queue.save();

//     req.io.emit("queueUpdated"); // Notify screens
//     res.status(201).json({ message: "Checked in successfully", ticket });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
export const checkIn = async (req, res) => {
  try {
    const { queueId, customerName, phone, email } = req.body;

    const queue = await Queue.findById(queueId);
    if (!queue) return res.status(404).json({ message: "Queue not found" });

    queue.lastTicket += 1;
    const ticket = {
      ticketNumber: queue.lastTicket,
      customerName,
      status: "waiting",
      createdAt: new Date()
    };

    queue.tickets.push(ticket);
    await queue.save();

    //  Send Notification
    if (phone) await sendSMS(phone, `Hi ${customerName}, your ticket is A${ticket.ticketNumber}. Please wait.`);
    if (email) await sendEmail(email, "Ticket Confirmed", `Your ticket is A${ticket.ticketNumber}.`);

    req.io.emit("queueUpdated");
    res.status(201).json({ message: "Checked in successfully", ticket });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Get Live Queue
export const getQueue = async (req, res) => {
  try {
    const queue = await Queue.find().select("name tickets");
    res.json(queue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  4. Call Next Ticket
// export const callNext = async (req, res) => {
//   try {
//     const { queueId, counter } = req.body;
//     const queue = await Queue.findById(queueId);
//     if (!queue) return res.status(404).json({ message: "Queue not found" });

//     const ticket = queue.tickets.find(t => t.status === "waiting");
//     if (!ticket) return res.status(404).json({ message: "No waiting customer" });

//     ticket.status = "called";
//     ticket.callTime = new Date();
//     ticket.counter = counter;

//     await queue.save();
//     req.io.emit("customerCalled", ticket);

//     res.json(ticket);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
export const callNext = async (req, res) => {
  try {
    const { queueId, counter } = req.body;
    const queue = await Queue.findById(queueId);
    if (!queue) return res.status(404).json({ message: "Queue not found" });

    const ticket = queue.tickets.find(t => t.status === "waiting");
    if (!ticket) return res.status(404).json({ message: "No waiting customer" });

    ticket.status = "called";
    ticket.callTime = new Date();
    ticket.counter = counter;

    await queue.save();

    // ✅ Send Notification
    if (ticket.phone) await sendSMS(ticket.phone, `Hi ${ticket.customerName}, please proceed to counter ${counter}.`);
    if (ticket.email) await sendEmail(ticket.email, "Your Turn", `Please proceed to counter ${counter}.`);

    req.io.emit("customerCalled", ticket);
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  5. Serve Ticket
export const serveTicket = async (req, res) => {
  try {
    const { queueId, ticketNumber } = req.params;
    const queue = await Queue.findById(queueId);
    if (!queue) return res.status(404).json({ message: "Queue not found" });

    const ticket = queue.tickets.find(t => t.ticketNumber == ticketNumber);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    ticket.status = "served";
    ticket.serveTime = new Date();

    await queue.save();
    req.io.emit("queueUpdated");

    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  6. Cancel Ticket
export const cancelTicket = async (req, res) => {
  try {
    const { queueId, ticketNumber } = req.params;
    const queue = await Queue.findById(queueId);
    if (!queue) return res.status(404).json({ message: "Queue not found" });

    const ticket = queue.tickets.find(t => t.ticketNumber == ticketNumber);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    ticket.status = "cancelled";
    await queue.save();

    req.io.emit("queueUpdated");
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
