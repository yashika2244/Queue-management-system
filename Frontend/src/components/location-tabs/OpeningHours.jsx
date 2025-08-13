import React, { useState } from "react";
import { Plus, Copy } from "lucide-react";

const daysOfWeek = [
  { short: "Sun", full: "Sunday" },
  { short: "Mon", full: "Monday" },
  { short: "Tue", full: "Tuesday" },
  { short: "Wed", full: "Wednesday" },
  { short: "Thu", full: "Thursday" },
  { short: "Fri", full: "Friday" },
  { short: "Sat", full: "Saturday" },
];

export default function OpeningHours() {
  const [hours, setHours] = useState(
    daysOfWeek.map((day) => ({
      ...day,
      open: true,
      ranges: [{ start: "12:00", end: "11:00" }],
    }))
  );

  const toggleDay = (i) => {
    setHours((prev) => {
      const updated = [...prev];
      updated[i].open = !updated[i].open;
      return updated;
    });
  };

  const updateTime = (dayIdx, rangeIdx, field, value) => {
    setHours((prev) => {
      const updated = [...prev];
      updated[dayIdx].ranges[rangeIdx][field] = value;
      return updated;
    });
  };

  const addRange = (dayIdx) => {
    setHours((prev) => {
      const updated = [...prev];
      updated[dayIdx].ranges.push({ start: "09:00", end: "17:00" });
      return updated;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-5xl overflow-hidden">
        
        {/* Left Column */}
        <div className="w-2/3 border-r border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-5">Regular weekly hours</h2>

          <div className="space-y-4">
            {hours.map((item, i) => (
              <div
                key={item.short}
                className="flex items-center gap-3 border-b border-gray-200 pb-3 last:border-none"
              >
                {/* Toggle */}
                <button
                  onClick={() => toggleDay(i)}
                  className={`relative w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                    item.open ? "bg-teal-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                      item.open ? "translate-x-5" : ""
                    }`}
                  />
                </button>

                {/* Day */}
                <span className="w-10 font-medium">{item.short}</span>

                {/* Time Inputs */}
                {item.ranges.map((range, rangeIdx) => (
                  <div key={rangeIdx} className="flex items-center gap-2">
                    <input
                      type="time"
                      value={range.start}
                      disabled={!item.open}

                      onChange={(e) =>
                        updateTime(i, rangeIdx, "start", e.target.value)
                      }
                      className="border  border-gray-300 rounded px-2 py-1 text-sm w-28 focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:bg-gray-100"
                    />
                    <span>-</span>
                    <input
                      type="time"
                      value={range.end}
                      disabled={!item.open}
                      onChange={(e) =>
                        updateTime(i, rangeIdx, "end", e.target.value)
                      }
                      className="border border-gray-300 rounded px-2 py-1 text-sm w-28 focus:outline-none focus:ring-2 focus:ring-teal-400 disabled:bg-gray-100"
                    />
                  </div>
                ))}

                {/* Actions */}
                {item.open && (
                  <div className="flex items-center gap-2 ml-auto">
                    <button
                      onClick={() => addRange(i)}
                      className="text-teal-600 hover:text-teal-800"
                    >
                      <Plus size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Copy size={16} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 p-6">
          <h3 className="font-semibold mb-2">Special days, hours</h3>
          <p className="text-sm text-gray-500 mb-4">
            Add dates when your availability changes from regular weekly hours
            (e.g. public holidays).
          </p>
          <button className="w-full py-1 border rounded-lg font-semibold border-gray-200 bg-gray-100 text-cyan-700 hover:bg-gray-200  cursor-pointer transition">
            + New date
          </button>
        </div>
      </div>
    </div>
  );
}
