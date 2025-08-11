// src/pages/AppointmentPage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import AppointmentList from "../components/appointment/AppointmentList";

const AppointmentPage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <AppointmentList/>
      </div>
    </div>
  );
};

export default AppointmentPage;
