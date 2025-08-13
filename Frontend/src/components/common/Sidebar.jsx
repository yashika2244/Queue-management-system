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
  Rocket,
  X,
  Menu,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const { auth } = useAuth();
  const userName = auth?.name || "User";
  const firstLetter = userName.charAt(0).toUpperCase();

  const links = [
    { to: "/dashboard", icon: GoHome, label: "Overview" },
    { to: "/queue", icon: ListOrdered, label: "Service" },
    { to: "/appointment", icon: Calendar, label: "Appointments" },
    { to: "/staff", icon: Users, label: "Data insights" },
    { to: "/location", icon: BarChart2, label: "location Settings" },
    { to: "/get-started", icon: Rocket, label: "Get Started" },
    { to: "/feedback", icon: MessageCircle, label: "Feedback" },
    { to: "/setup", icon: Settings, label: "Setup" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative top-0 md:top-10 left-0 z-50
          h-screen md:h-auto
          w-full md:w-16 
          bg-cyan-800 shadow-sm 
          px-6 py-8 md:px-1 md:py-2  
          flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"}
          md:translate-y-0
        `}
      >
        {/* Top Logo */}
        <div>
          <h2 className="text-2xl font-bold text-[#e0f7fa] mb-10 tracking-wide md:hidden">
            QueuePilot
          </h2>

          {/* Navigation */}
          <nav className="flex flex-col gap-2     md:space-y-5">
            {links.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
    ${
      isActive
        ? "bg-[#f7fafc] text-cyan-800"
        : "hover:bg-[#f7fafc] hover:text-cyan-800 text-white"
    }`
                }
              >
                <Icon size={20} />
                <span className="text-sm md:hidden">{label}</span>

                {/* Tooltip */}
                <span
                  className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap 
    rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 
    transition duration-200 pointer-events-none md:block hidden"
                >
                  {label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Profile */}
        <div className="flex flex-col gap-3 cursor-pointer md:mt-2">
          <div className="flex items-center gap-3 px-3 p-2 md:py-2 md:rounded-lg rounded-full hover:bg-[#e2e8f0] transition duration-200 group">
            <div className="w-8 h-8 rounded-full bg-[#cbd5e0] flex items-center justify-center text-[#1a202c] font-semibold group-hover:bg-cyan-700 group-hover:text-white">
              {firstLetter}
            </div>
            <p className="text-sm font-semibold text-[#cbd5e0] group-hover:text-[#1a202c] md:hidden block">
              {userName}
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 right-4 p-2  bg-cyan-600 text-[#e0f7fa] hover:text-cyan-800 hover:bg-[#e0f7fa] cursor-pointer rounded-full shadow-md z-50"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </>
  );
};

export default Sidebar;
