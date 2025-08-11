// import mongoose from "mongoose";

// const queueSchema = new mongoose.Schema({
//   ticketId: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   phone: { type: String },
//   service: { type: String, required: true },
//   status: { type: String, enum: ["waiting", "called", "served", "cancelled"], default: "waiting" },
//   counter: { type: Number, default: null },
//   checkInTime: { type: Date, default: Date.now },
//   callTime: { type: Date },
//   serveTime: { type: Date }
// });

// export default mongoose.model("Queue", queueSchema);


import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  ticketNumber: { type: Number, required: true },
  customerName: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["waiting", "called", "served", "cancelled"], 
    default: "waiting" 
  },
  createdAt: { type: Date, default: Date.now },
  callTime: Date,
  serveTime: Date,
  counter: String
});

const queueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  maxLimit: { type: Number, default: 50 },
  lastTicket: { type: Number, default: 0 },
  tickets: [ticketSchema] // tickets array add hua
});

export default mongoose.model("Queue", queueSchema);
