
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();
  const token = localStorage.getItem("token");

  if (!auth && !token) {
    console.log("🔒 ProtectedRoute blocked. No auth/token.");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
