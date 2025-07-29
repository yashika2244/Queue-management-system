import React, { useState } from "react";
import {
  Calendar,
  BarChart2,
  Layers,
  Wifi,
  Rocket,
  HelpCircle,
  User,
  Plus,
  Search,
  Eye,
  MapPin,
  Clock,
  Menu,
  X,
} from "lucide-react";
import { IoIosMenu } from "react-icons/io";
import { LuSlidersHorizontal } from "react-icons/lu";
import { GoHome } from "react-icons/go";
const QminderDashboard = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("Today");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClerk, setClerk] = useState(false);
  const [showServedDetails, setShowServedDetails] = useState(false);
  const visitors = [
    {
      name: "Sophia Murphy",
      service: "Consultation",
      assignedTo: "Carlos",
      time: "66h 34min",
    },
    {
      name: "Jackson Lee",
      service: "Support",
      assignedTo: null,
      time: "66h 33min",
    },
  ];

  const serviceCounts = {
    Support: visitors.filter((v) => v.service === "Support").length,
    Consultation: visitors.filter((v) => v.service === "Consultation").length,
    Information: visitors.filter((v) => v.service === "Information").length,
  };

  return (
    <div className="min-h-screen  font-sans">
      {/* Seeing Sample Data Banner */}
      <div className="bg-gray-200  px-5.5 py-2  md:flex  justify-between hidden ">
        <div className=" flex items-center gap-3">
          <button className="bg-white text-purple-800 px-1 py-[1px] text-[11px] font-[700] rounded-sm">
            DEMO LOCATION
          </button>
          <span className="text-md font-sans text-gray-800">
            Seeing sample data. When you’re ready, create your own location.
          </span>
        </div>

        <button className="flex items-center text-sm font-semibold space-x-1 p-[5px] rounded-md hover:bg-gray-300 ">
          <span>ADD LOCATION</span>
        </button>
      </div>

      {/* Main Layout with Sidebar and Content */}
      <div className="flex flex-raw">
        {/* Sidebar */}

        {/* Hamburger for Mobile */}

        {/* Sidebar - Desktop */}
        <aside className="hidden sm:flex w-14.5 bg-[#034241] text-[#027474] flex-col items-center py-2 space-y-7">
          {[
            { id: "home", icon: GoHome },
            { id: "calendar", icon: Calendar },
            { id: "chart", icon: BarChart2 },
            { id: "sliders", icon: LuSlidersHorizontal },
            { id: "wifi", icon: Wifi },
            { id: "rocket", icon: Rocket },
            { id: "help", icon: HelpCircle },
            { id: "user", icon: User },
          ].map(({ id, icon: Icon }) => (
            <div
              key={id}
              onClick={() => setActiveIcon(id)}
              className={`p-3.5 rounded-lg cursor-pointer ${
                activeIcon === id
                  ? "bg-[#065755] text-white"
                  : "hover:bg-[#065755] hover:text-white transition"
              }`}
            >
              <Icon className="w-5.5 h-5.5 font-bold" />
            </div>
          ))}
        </aside>

        {/* Sidebar - Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-52 bg-[#034241] text-[#027474] p-4 transform transition-transform z-50 sm:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <X
              className="text-white w-6 h-6 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col space-y-5">
            {[
              { id: "home", icon: GoHome },
              { id: "calendar", icon: Calendar },
              { id: "chart", icon: BarChart2 },
              { id: "sliders", icon: LuSlidersHorizontal },
              { id: "wifi", icon: Wifi },
              { id: "rocket", icon: Rocket },
              { id: "help", icon: HelpCircle },
              { id: "user", icon: User },
            ].map(({ id, icon: Icon }) => (
              <div
                key={id}
                onClick={() => {
                  setActiveIcon(id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                  activeIcon === id
                    ? "bg-[#065755] text-white"
                    : "hover:bg-[#065755] hover:text-white transition"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium capitalize">{id}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}

          <div className="flex justify-between items-center md:px-5.5 md:pt-2 border-b border-gray-300">
            <div className="flex md:gap-8 gap-3">
              <div className="flex justify-center items-center  gap-4  px-4 py-2 md:p-0">
                <IoIosMenu
                  className="w-6 h-6 sm:hidden  text-black cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(true)}
                />

                <h1 className="text-xl font-semibold text-gray-950 mb-1 ">
                  Overview
                </h1>
              </div>
              <div className="flex space-x-7   text-sm text-gray-600">
                {["Today", "Daily Report", "Weekly Report"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 border-b-2 transition duration-200 text-sm ${
                      activeTab === tab
                        ? "border-teal-800  text-teal-800 "
                        : "border-transparent  hover:text-teal-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative md:flex items-center hidden">
              <Search className="absolute left-3 w-4 h-4 text-gray-700" />
              <input
                type="search"
                className="px-12 py-1 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div className="md:py-5 py-4 border-b border-gray-300 px-7">
            <button className="flex items-center gap-1  text-sm text-gray-900 font-[400] bg-[rgba(5,105,72,0.06)] py-1 px-2 rounded-lg border border-[rgba(15,95,75,0.1)]">
              <MapPin className="w-4 h-4 text-gray-700" />
              DEMO Service Center
            </button>
          </div>

          {/* Dashboard Grid */}
          <div className="md:px-5.5 py-6 grid grid-cols-1 lg:grid-cols-3  bg-gray-50">
            {/* Visitors Waiting */}

            <div className="bg-white p-4 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-700 mb-1 flex items-center gap-2 justify-between md:justify-normal">
                Visitors waiting
                <span className="text-5xl font-semibold text-[#40d48d] md:flex hidden">
                  2
                </span>
                {/* Mobile dropdown (hidden on sm and up) */}
                <div
                  className="flex items-center justify-end  sm:justify-normal sm:w-auto sm:hidden cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-5xl font-semibold text-[#40d48d]">
                    2
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-300 ml-1 transform transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {visitors.length} visitors waiting
              </p>

              {/* Collapsible Section: hidden on mobile unless open, always visible on sm+ */}
              <div className={`${isOpen ? "block" : "hidden"} sm:block`}>
                <div className="-mx-4 border-t border-b border-gray-200 py-2 bg-gray-50 font-sans">
                  <div className="flex gap-3 text-sm px-3">
                    {["All", "Support", "Consultation", "Information"].map(
                      (filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={`flex gap-1 items-center px-2 py-[2px] rounded-lg transition cursor-pointer ${
                            activeFilter === filter
                              ? "bg-[rgba(5,105,72,0.06)] text-gray-900 font-semibold"
                              : "text-gray-800 hover:bg-[rgba(5,105,72,0.06)] hover:text-gray-900"
                          }`}
                        >
                          {filter}
                          <span className="font-bold">
                            {filter === "All"
                              ? visitors.length
                              : serviceCounts[filter] || 0}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  {visitors.map((v, i) => (
                    <div
                      key={i}
                      className="-mx-4 border-b border-gray-200 py-2 font-sans p-3 flex justify-between"
                    >
                      <div>
                        <p className="text-teal-800 font-[700]">{v.name}</p>
                        <p className="text-sm text-gray-600">
                          in {v.service}{" "}
                          {v.assignedTo && (
                            <span className="text-xs text-gray-300 font-[600]">
                              <br /> Assigned to{" "}
                              <span className="text-teal-800 text-sm font-[700] font-sans">
                                {v.assignedTo}
                              </span>
                            </span>
                          )}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 flex flex-col gap-1 justify-center items-center">
                        <Clock className="w-3.5 h-3.5 text-center text-gray-300" />
                        {v.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Clerks Busy */}
            <div className="bg-white p-4 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-700 mb-1 flex items-center justify-between md:justify-normal gap-2">
                Clerks busy
                {/* Mobile toggle: 1/1 + arrow */}
                <div
                  className="flex items-center sm:hidden cursor-pointer"
                  onClick={() => setClerk(!isClerk)}
                >
                  <span className="text-[#40d48d] text-5xl">1</span>
                  <span className="font-bold">/1</span>
                  <svg
                    className={`w-6 h-6 text-gray-300 ml-1 transform transition-transform ${
                      isClerk ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {/* Desktop only: show 1/1 normally */}
                <div className="hidden sm:flex">
                  <span className="text-[#40d48d] text-5xl">1</span>
                  <span className="font-bold">/1</span>
                </div>
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                1 clerk out of 1 serving visitors
              </p>

              {/* Toggle section: hidden on mobile unless open, always visible on sm+ */}
              <div className={`${isClerk ? "block" : "hidden"} sm:block`}>
                <p className="text-md text-center text-teal-700 mb-2 border-t border-gray-200 pt-3 -mx-4">
                  3 desks are available
                </p>

                <div className="space-y-3 -mx-2 mb-4">
                  {[1, 2, 3].map((desk) => (
                    <div
                      key={desk}
                      className="border border-gray-300 shadow-sm rounded-md h-24 p-4"
                    >
                      <p className="text-gray-500 text-sm">DESK {desk}</p>
                      <p className="text-xs text-center text-gray-300 font-bold">
                        Desk is available
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200 -mx-1">
                  {visitors.map((v, i) => (
                    <div
                      key={i}
                      className="-mx-4 border-b border-gray-200 py-2 font-sans p-3 flex justify-between"
                    >
                      <div>
                        <p className="text-teal-800 font-[700]">{v.name}</p>
                        <p className="text-sm text-gray-600">
                          in {v.service}{" "}
                          {v.assignedTo && (
                            <span className="text-xs text-gray-300 font-[600]">
                              <br /> Assigned to{" "}
                              <span className="text-teal-800 text-sm font-[700] font-sans">
                                {v.assignedTo}
                              </span>
                            </span>
                          )}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 flex flex-col gap-1 items-center">
                        <Clock className="w-3.5 h-3.5 text-center text-gray-300" />
                        {v.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visitors Served */}
            <div className="bg-white p-5 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-700 mb-1">
                <div className="flex justify-between sm:justify-normal items-start sm:items-center md:gap-2">
                  <span className="text-gray-700">Visitors Served</span>

                  {/* Desktop View */}
                  <div className="hidden sm:flex items-center">
                    <span className="text-[#40d48d] text-5xl">0</span>
                    <span className="font-bold">/0</span>
                  </div>

                  {/* Mobile View */}
                  <div
                    className="flex items-center sm:hidden cursor-pointer"
                    onClick={() => setShowServedDetails((prev) => !prev)}
                  >
                    <span className="text-[#40d48d] text-4xl leading-none">
                      0
                    </span>
                    <span className="font-bold text-lg ml-1">/0</span>
                    <svg
                      className={`w-4 h-4 text-gray-400 ml-2 transition-transform ${
                        showServedDetails ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </h2>

              {/* Common text, always visible */}
              <p className="text-sm text-gray-500 mb-1">
                0 visitors out of 0 sign-ins served
              </p>

              {/* This should only be visible on mobile when toggled */}
              {(showServedDetails || window.innerWidth >= 640) && (
                <p className="text-md text-gray-800 text-center p-10 border-t border-gray-200 -mx-5 sm:block">
                  No visitors have been served today
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default QminderDashboard;
