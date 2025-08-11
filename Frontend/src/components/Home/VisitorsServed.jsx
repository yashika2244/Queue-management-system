import React from "react";
import { CheckCircle } from "lucide-react";

const data = [
  { type: "Consultation", visitors: "2 + 1", wait: "4min", service: "16min" },
  { type: "Information", visitors: "1", wait: "10min", service: "9min" },
  { type: "Support", visitors: "3", wait: "1min", service: "10min" },
];

const getTypeColor = (type) => {
  switch (type) {
    case "Consultation": return "bg-blue-100 text-blue-700";
    case "Information": return "bg-purple-100 text-purple-700";
    case "Support": return "bg-yellow-100 text-yellow-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const VisitorsServed = () => {
  const total = 6;
  const served = 5;
  const progress = (served / total) * 100;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <CheckCircle className="text-green-600" size={20} /> Visitors Served
        </h2>
        <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
          {served}/{total}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className="h-2 bg-green-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-100 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-gray-800">{item.type}</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getTypeColor(item.type)}`}>
                Category
              </span>
            </div>
            <div className="text-xs text-gray-600 flex flex-wrap gap-x-6">
              <span><strong>Visitors:</strong> {item.visitors}</span>
              <span><strong>Avg. Wait:</strong> {item.wait}</span>
              <span><strong>Avg. Service:</strong> {item.service}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorsServed;
