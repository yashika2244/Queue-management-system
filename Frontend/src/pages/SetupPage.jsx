// src/pages/SetupPage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import SetupBranchService from "../components/branches/SetupBranchService";


const SetupPage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <SetupBranchService/>
      </div>
    </div>
  );
};

export default SetupPage;
