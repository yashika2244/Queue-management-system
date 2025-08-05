import React from "react";
import { CheckCircle } from "lucide-react";

const data = [
  {
    type: "Consultation",
    visitors: "2 + 1",
    wait: "4min",
    service: "16min",
  },
  {
    type: "Information",
    visitors: "1",
    wait: "10min",
    service: "9min",
  },
  {
    type: "Support",
    visitors: "3",
    wait: "1min",
    service: "10min",
  },
];

const VisitorsServed = () => {
  const total = 6;
  const served = 5;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow space-y-5">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600" size={18} />
            Visitors Served
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
              {served}
            </span>
            <span className="text-sm text-gray-500 font-medium">/ {total}</span>
          </div>
        </h2>
        <p className="text-sm text-gray-500">
          {served} visitors out of {total} sign-ins served
        </p>
      </div>

      {/* List of served categories */}
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-100 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition cursor-default"
          >
            <p className="text-sm font-semibold text-gray-800 mb-1">
              {item.type}
            </p>
            <div className="text-xs text-gray-600 flex flex-wrap gap-x-6">
              <span>
                <span className="font-medium text-gray-700">VISITORS:</span>{" "}
                {item.visitors}
              </span>
              <span>
                <span className="font-medium text-gray-700">AVG. WAIT:</span>{" "}
                {item.wait}
              </span>
              <span>
                <span className="font-medium text-gray-700">AVG. SERVICE:</span>{" "}
                {item.service}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorsServed;
