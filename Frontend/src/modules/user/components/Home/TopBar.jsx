import React from "react";
import { Search } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-[#f2f2fc] border-b">
      <div className="text-sm text-[#5f5f89] font-medium">
        DEMO LOCATION
      </div>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
        />
        <Search size={18} className="text-gray-500" />
        <button className="text-sm text-[#5f5f89] font-medium hover:underline">
          ADD LOCATION
        </button>
      </div>
    </div>
  );
}
