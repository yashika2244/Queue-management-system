// src/pages/DashboardPage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import DashboardHome from "../components/dash/DashboardHome";

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <DashboardHome/>
      </div>
    </div>
  );
};

export default DashboardPage;
