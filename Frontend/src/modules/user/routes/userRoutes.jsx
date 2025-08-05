import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import QminderDashboard from "../dashboard/Dashboard";
import SetupForm from "../components/setUp/SetupForm";
import WelcomeScreen from "../pages/WelcomePage";
import GetStarted from '../pages/Rocket';

const UserRoutes = () => {
    const [showWelcome, setShowWelcome] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/setup/trial" element={<SetupForm/>} />
      <Route path="/getstarted/firstvisit=true" element={<WelcomeScreen/>} />
      <Route path="/welcome" element={<GetStarted/>} />

      <Route path="/dashboard" element={<QminderDashboard />} />
    </Routes>
  );
};

export default UserRoutes;
