import React, { useState } from "react";
import { Search, Plus, GripVertical } from "lucide-react";

const initialServices = [
  { id: 1, name: "Information", color: "bg-sky-400", enabled: true },
  { id: 2, name: "Support", color: "bg-amber-400", enabled: true },
  { id: 3, name: "Consultation", color: "bg-violet-400", enabled: true },
];

export default function ServicesList() {
  const [services, setServices] = useState(initialServices);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, enabled: !s.enabled } : s
      )
    );
  };

  const filtered = services.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow p-5">
      {/* Top Controls */}
      <div className="flex items-center gap-3 mb-4">
        {/* Search */}
        <div className="flex items-center border rounded px-2 w-64 h-9">
          <Search className="text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Find"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-2 text-sm focus:outline-none"
          />
        </div>

        {/* Filter */}
        <select className="border rounded px-3 py-1 text-sm text-gray-700 h-9">
          <option>Enabled, Disabled</option>
          <option>Enabled</option>
          <option>Disabled</option>
        </select>

        {/* Button */}
        <button className="flex items-center gap-1 bg-teal-700 hover:bg-teal-800 text-white px-3 h-9 rounded">
          <Plus size={14} /> New service
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[40px_40px_1fr_100px] px-2 py-2 text-gray-500 text-sm border-b">
        <div></div>
        <div>
          <input type="checkbox" />
        </div>
        <div>Name</div>
        <div>Status</div>
      </div>

      {/* Table Rows */}
      {filtered.map((service) => (
        <div
          key={service.id}
          className="grid grid-cols-[40px_40px_1fr_100px] items-center px-2 py-3 border-b last:border-none hover:bg-gray-50"
        >
          {/* Drag Handle */}
          <div className="flex justify-center text-gray-400 cursor-grab">
            <GripVertical size={16} />
          </div>

          {/* Checkbox */}
          <div>
            <input type="checkbox" />
          </div>

          {/* Name */}
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${service.color}`} />
            <span>{service.name}</span>
          </div>

          {/* Status Toggle */}
          <div>
            <button
              onClick={() => toggleStatus(service.id)}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                service.enabled ? "bg-teal-700" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  service.enabled ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      ))}

      {/* Add New Service */}
      <div className="px-2 py-3 text-teal-700 cursor-pointer hover:underline">
        + New service
      </div>
    </div>
  );
}
