import React from "react";
import { Clock, UserCheck, UserX } from "lucide-react";

const visitorsWaiting = [
  {
    name: "Sophia Murphy",
    type: "Consultation",
    clerk: "Carlos",
    time: "19h 12min",
  },
  {
    name: "Jackson Lee",
    type: "Support",
    clerk: null,
    time: "19h 10min",
  },
];

const getTypeColor = (type) => {
  switch (type) {
    case "Consultation":
      return "border-blue-500";
    case "Support":
      return "border-yellow-500";
    default:
      return "border-gray-300";
  }
};

const VisitorsWaiting = () => {
  return (
    <div className="space-y-6">
      {/* Header with count badge */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Visitors Waiting</h2>
        <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
          {visitorsWaiting.length}
        </span>
      </div>

      {/* Visitor Cards */}
      <div className="space-y-4">
        {visitorsWaiting.map((v, i) => (
          <div
            key={i}
            className={`border-l-4 ${getTypeColor(
              v.type
            )} bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-600 text-sm">
              {v.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>

            {/* Info */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">{v.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock size={14} />
                  {v.time}
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Visit type: <span className="font-medium">{v.type}</span>
              </p>

              {/* Clerk Assignment */}
              {v.clerk ? (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <UserCheck size={14} />
                  Assigned to <span className="font-semibold">{v.clerk}</span>
                </p>
              ) : (
                <p className="text-sm text-gray-400 italic flex items-center gap-1">
                  <UserX size={14} />
                  Not assigned
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorsWaiting;
