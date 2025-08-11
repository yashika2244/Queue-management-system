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

const getTypeStyles = (type) => {
  switch (type) {
    case "Consultation":
      return {
        border: "border-blue-500",
        badge: "bg-blue-100 text-blue-700",
      };
    case "Support":
      return {
        border: "border-yellow-500",
        badge: "bg-yellow-100 text-yellow-700",
      };
    default:
      return {
        border: "border-gray-300",
        badge: "bg-gray-100 text-gray-700",
      };
  }
};

const VisitorsWaiting = () => {
  return (
    <div className="space-y-6">
      {/* Header with count badge */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Visitors Waiting
        </h2>
        <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full shadow-sm">
          {visitorsWaiting.length} Waiting
        </span>
      </div>

      {/* Visitor Cards */}
      <div className="grid gap-4">
        {visitorsWaiting.map((v, i) => {
          const styles = getTypeStyles(v.type);
          return (
            <div
              key={i}
              className={`border-l-4 ${styles.border} bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center font-bold text-gray-700 text-lg shadow-inner">
                {v.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-lg">{v.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{v.time}</span>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`px-3 py-0.5 text-xs font-medium rounded-full ${styles.badge}`}
                  >
                    {v.type}
                  </span>
                </div>

                {/* Clerk Assignment */}
                <div className="mt-2">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisitorsWaiting;
