import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
// import AnalyticsOverview from "../components/analytics/AnalyticsOverview";
import LocationSettings from "../components/analytics/LocationSettings";
import { Outlet } from "react-router-dom";

const AnalyticsPage = () => {
  return (
     <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {/* <LocationSettings /> */}
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;
