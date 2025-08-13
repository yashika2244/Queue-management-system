// src/pages/StaffPage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";

import  DataInsight from '../components/staff/StaffManagement'
const StaffPage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
    <DataInsight/>
      </div>
    </div>
  );
};

export default StaffPage;
