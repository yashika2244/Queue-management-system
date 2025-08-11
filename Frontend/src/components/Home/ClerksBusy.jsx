import React from "react";
import { MonitorCheck, Users } from "lucide-react";

const desks = [1, 2, 3];

const ClerksBusy = () => {
  const totalClerks = 3;
  const servingClerks = 2;
  const progress = (servingClerks / totalClerks) * 100;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users size={22} className="text-green-600" />
          <h2 className="text-xl font-bold text-gray-800">Clerks Busy</h2>
        </div>
        <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full shadow-sm">
          {servingClerks}/{totalClerks}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className="h-2 bg-green-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <p className="text-sm text-gray-500">
        <span className="font-medium text-gray-700">{servingClerks}</span> out of{" "}
        <span className="font-medium text-gray-700">{totalClerks}</span> clerks are serving visitors.
      </p>

      {/* Desk List */}
      <div className="space-y-3">
        {desks.map((desk) => (
          <div
            key={desk}
            className="flex items-center justify-between border border-gray-100 bg-gradient-to-br from-gray-50 to-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            <div className="font-semibold text-gray-800">Desk {desk}</div>
            <span className="flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full">
              <MonitorCheck size={14} /> Available
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClerksBusy;
