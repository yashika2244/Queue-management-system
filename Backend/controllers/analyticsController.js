
import Queue from "../models/queue.js";
import mongoose from "mongoose";

// Helper: Format time
const formatTime = (ms) => {
  if (!ms || ms <= 0) return "0 mins";
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  return `${mins} mins ${secs} secs`;
};

// ✅ Overall Analytics (Admin Dashboard)
export const getAnalytics = async (req, res) => {
  try {
    const servedTickets = await Queue.find({ status: "served" });
    const totalServed = servedTickets.length;

    // Avg Wait Time
    let totalWaitTime = 0;
    servedTickets.forEach(ticket => {
      if (ticket.callTime && ticket.checkInTime) {
        totalWaitTime += new Date(ticket.callTime) - new Date(ticket.checkInTime);
      }
    });

    const avgWaitTime = totalServed > 0 ? formatTime(totalWaitTime / totalServed) : "0 mins";

    // Busiest Hour
    const hourCount = {};
    servedTickets.forEach(ticket => {
      const hour = new Date(ticket.callTime).getHours();
      hourCount[hour] = (hourCount[hour] || 0) + 1;
    });

    let busiestHour = "N/A";
    if (Object.keys(hourCount).length > 0) {
      const maxHour = Object.keys(hourCount).reduce((a, b) =>
        hourCount[a] > hourCount[b] ? a : b
      );
      busiestHour = `${maxHour}:00 - ${Number(maxHour) + 1}:00`;
    }

    res.json({ avgWaitTime, totalServed, busiestHour });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Queue-wise Analytics
export const getQueueAnalytics = async (req, res) => {
  try {
    const queueStats = await Queue.aggregate([
      {
        $group: {
          _id: "$service",
          totalTickets: { $sum: 1 },
          served: { $sum: { $cond: [{ $eq: ["$status", "served"] }, 1, 0] } },
          waiting: { $sum: { $cond: [{ $eq: ["$status", "waiting"] }, 1, 0] } },
          cancelled: { $sum: { $cond: [{ $eq: ["$status", "cancelled"] }, 1, 0] } },
          avgWaitTime: { $avg: { $subtract: ["$callTime", "$checkInTime"] } }
        }
      }
    ]);

    const result = queueStats.map(q => ({
      service: q._id,
      totalTickets: q.totalTickets,
      served: q.served,
      waiting: q.waiting,
      cancelled: q.cancelled,
      avgWaitTime: formatTime(q.avgWaitTime || 0)
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Staff Performance Analytics
export const getStaffAnalytics = async (req, res) => {
  try {
    const staffPerf = await Queue.aggregate([
      { $match: { status: "served" } },
      {
        $group: {
          _id: "$counter",
          servedTickets: { $sum: 1 },
          avgServeTime: { $avg: { $subtract: ["$serveTime", "$callTime"] } }
        }
      }
    ]);

    const result = staffPerf.map(staff => ({
      counter: staff._id || "Unknown",
      servedTickets: staff.servedTickets,
      avgServeTime: formatTime(staff.avgServeTime || 0)
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
