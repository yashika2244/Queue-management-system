import React from "react";
import { Search } from "lucide-react";

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ["Today", "Daily Report", "Weekly Report"];

  return (
    <header className="bg-white border-b px-4 md:px-8 md:py-4  py-2 shadow-sm">
      {/* Top Info Row */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Location Badge */}
        <span className="md:inline-block hidden bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wide">
          Demo Location
        </span>

        {/* Info Text */}
        <p className="text-sm text-gray-600 text-center md:text-left hidden md:flex">
          Viewing sample data. Create your own location when you're ready.
        </p>

        {/* Add Location */}
        <button className="text-sm hidden md:flex text-red-600 font-medium hover:bg-red-50 px-3 py-1 rounded transition">
          + Add Location
        </button>
      </div>

      {/* Overview Heading */}
      <h1 className="text-2xl font-semibold text-gray-800 md:mt-6 md:border-t border-gray-200 md:block  md:pt-2 hidden">Overview</h1>

      {/* Tabs & Search */}
      <div className="md:mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Tabs */}
        <div className="flex space-x-4 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 border-b-2 transition-all duration-200 ${
                activeTab === tab
                  ? "text-cyan-700 border-cyan-600"
                  : "text-gray-500 border-transparent hover:text-cyan-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72 ">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
