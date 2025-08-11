

import React, { useState } from "react";
import HomePage from "../../components/Home/HomeDashboard";
import {
  Home,
  CalendarDays,
  MessageCircle,
  SlidersHorizontal,
  Wifi,
  Settings,
  Menu,
  X,
  Rocket,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: CalendarDays, label: "Appointments" },
  { icon: MessageCircle, label: "Messages" },
  { icon: SlidersHorizontal, label: "Controls" },
  { icon: Wifi, label: "Network" },
  { icon: Rocket, label: "Get Started" },
  { icon: Settings, label: "Settings" },
];

export default function QminderDashboard() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-40 top-0 md:top-15 left-0 
          h-screen w-full md:w-16 
          bg-cyan-800 border-b shadow-sm 
          px-6 py-8 md:px-1 md:py-2  
          font-sans flex flex-col  gap-7
          transition-transform duration-300 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"} 
          md:translate-y-0
        `}
      >
        {/*  Close Button (Right Corner) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 md:hidden bg-[#e0f7fa] p-2 text-cyan-700 rounded-full"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-[#e0f7fa] mb-10 tracking-wide md:hidden">
            QueuePilot
          </h2>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 md:space-y-6">
            {sidebarItems.map(({ icon: Icon, label }, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
                  ${
                    activeIndex === idx
                      ? "bg-[#f7fafc] text-cyan-800"
                      : "hover:bg-[#f7fafc] hover:text-cyan-800 text-white"
                  }
                `}
              >
                <Icon size={20} />
                <span className="text-sm md:hidden">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 px-3 p-2 md:py-2 md:rounded-lg rounded-full hover:bg-[#e2e8f0] transition duration-200 group">
          <div className="w-8 h-8 rounded-full bg-[#cbd5e0] hover:bg-cyan-700 flex items-center justify-center text-[#1a202c] hover:text-[#e2e8f0] font-semibold">
            U
          </div>
          <p className="text-sm font-semibold text-[#cbd5e0] group-hover:text-[#1a202c] md:hidden block">
            Yashu Chauhan
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header Only When Home Active */}
        {activeIndex === 0 && (
          <div className="flex items-center justify-between bg-white border-b border-gray-300 px-4 py-2 shadow-sm relative md:hidden">
            <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
            {/* Menu Button (Opens Sidebar) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 bg-cyan-700 text-[#e0f7fa] hover:text-cyan-800 rounded-full shadow-md"
            >
              <Menu size={22} />
            </button>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {activeIndex === 0 && <HomePage />}
        </main>
      </div>
    </div>
  );
}
