
import React from "react";
import { CalendarDays, Users, Activity, Layers } from "lucide-react";

const statCards = [
  {
    title: "Total Branches",
    value: 8,
    icon: <Layers className="w-6 h-6 text-white" />,
    bg: "bg-indigo-600",
  },
  {
    title: "Today's Appointments",
    value: 42,
    icon: <CalendarDays className="w-6 h-6 text-white" />,
    bg: "bg-blue-600",
  },
  {
    title: "Live Queues",
    value: 5,
    icon: <Activity className="w-6 h-6 text-white" />,
    bg: "bg-emerald-600",
  },
  {
    title: "Staff Online",
    value: 12,
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-teal-600",
  },
];

const DashboardHome = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome to QueuePilot</h1>
        <p className="text-gray-600">Here’s what’s happening today 👇</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-4 rounded-xl shadow-md text-white ${card.bg}`}
          >
            <div>
              <h3 className="text-sm font-medium">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
            <div className="p-2 bg-white/20 rounded-full">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments (Placeholder) */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
        <p className="text-gray-500">No upcoming appointments yet.</p>
        {/* You can map over appointment data here */}
      </div>

      {/* Live Queue Summary (Placeholder) */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Live Queues</h2>
        <p className="text-gray-500">All queues are currently stable.</p>
        {/* You can show queue cards or summary charts here */}
      </div>
    </div>
  );
};

export default DashboardHome;


