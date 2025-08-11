
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import {
  ListOrdered,
  Calendar,
  Users,
  BarChart2,
  MessageCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ onLogout }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/dashboard", icon: GoHome, label: "Dashboard" },
    { to: "/queue", icon: ListOrdered, label: "Queue" },
    { to: "/appointment", icon: Calendar, label: "Appointments" },
    { to: "/staff", icon: Users, label: "Staff" },
    { to: "/analytics", icon: BarChart2, label: "Analytics" },
    { to: "/feedback", icon: MessageCircle, label: "Feedback" },
    { to: "/setup", icon: Settings, label: "Setup" },
  ];

  return (
    <aside
      className={`
        fixed md:relative z-40 top-0 left-0 
        h-screen w-full md:w-16 
        bg-cyan-800 shadow-sm 
        px-6 py-8 md:px-1 md:py-2  
        flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"} 
        md:translate-y-0
      `}
    >
      {/* Close Button (Mobile Only) */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 md:hidden bg-[#e0f7fa] p-2 text-cyan-700 rounded-full"
      >
        <X size={24} />
      </button>

      {/* Top Logo */}
      <div>
        <h2 className="text-2xl font-bold text-[#e0f7fa] mb-10 tracking-wide md:hidden">
          QueuePilot
        </h2>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 md:space-y-6">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? "bg-[#f7fafc] text-cyan-800"
                    : "hover:bg-[#f7fafc] hover:text-cyan-800 text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-sm md:hidden">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Profile + Logout */}
      <div className="flex flex-col gap-3 cursor-pointer">
        {/* Profile */}
        <div className="flex items-center gap-3 px-3 p-2 md:py-2 md:rounded-lg rounded-full hover:bg-[#e2e8f0] transition duration-200 group">
          <div className="w-8 h-8 rounded-full bg-[#cbd5e0] flex items-center justify-center text-[#1a202c] font-semibold group-hover:bg-cyan-700 group-hover:text-white">
            U
          </div>
          <p className="text-sm font-semibold text-[#cbd5e0] group-hover:text-[#1a202c] md:hidden block">
            Your Name
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer text-red-400 hover:bg-red-100 hover:text-red-700"
        >
          <LogOut size={20} />
          <span className="text-sm md:hidden">Logout</span>
        </button>
      </div>

      {/* Mobile Menu Button (Fixed at top in main content) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 right-4 p-2 bg-cyan-700 text-[#e0f7fa] hover:text-cyan-800 rounded-full shadow-md"
      >
        <Menu size={22} />
      </button>
    </aside>
  );
};

export default Sidebar;
