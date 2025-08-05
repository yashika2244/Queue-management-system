import React from "react";
import { MonitorCheck, Users } from "lucide-react";

const desks = [1, 2, 3];

const ClerksBusy = () => {
  const totalClerks = 3;
  const servingClerks = 2;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users size={20} className="text-green-600" />
          <h2 className="text-lg font-bold text-gray-800">Clerks Busy</h2>
        </div>
        <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
          {servingClerks}/{totalClerks}
        </span>
      </div>

      {/* Subtext */}
      <p className="text-sm text-gray-500">
        {servingClerks} out of {totalClerks} clerks are serving visitors
      </p>

      {/* Desks Available Info */}
      <div>
        <button className="text-sm text-blue-600 font-medium hover:underline">
          {desks.length} desk{desks.length > 1 ? "s" : ""} available
        </button>
      </div>

      {/* Desks List */}
      <div className="space-y-3">
        {desks.map((desk) => (
          <div
            key={desk}
            className="border border-gray-200 bg-gray-50 rounded-xl px-4 py-3 shadow-sm hover:bg-gray-100 transition text-sm"
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-800">DESK {desk}</div>
              <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <MonitorCheck size={14} />
                Available
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClerksBusy;
