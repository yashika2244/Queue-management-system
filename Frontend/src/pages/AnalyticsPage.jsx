import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import AnalyticsOverview from "../components/analytics/AnalyticsOverview";

const AnalyticsPage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <AnalyticsOverview/>
      </div>
    </div>
  );
};

export default AnalyticsPage;
