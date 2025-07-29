

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import JoinQueue from "../pages/JoinQueue";
import QminderDashboard from "../dashboard/Dashboard";



const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* <Route path="/join" element={<JoinQueue/>} />  */}
      <Route path="/join" element={<QminderDashboard/>} /> 

    </Routes>
  );
};

export default UserRoutes;
