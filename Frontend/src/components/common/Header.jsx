
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, LogIn } from "lucide-react";

const Navbar = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="w-full bg-cyan-800 border-b border-gray-200 fixed top-0 left-0 z-40">
  <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center md:h-10 h-14">
    {/* Logo */}
    <h1
      onClick={() => navigate("/")}
      className="text-2xl font-bold text-cyan-500 tracking-wide cursor-pointer px-8 py-1  rounded-sm transition"
    >
      QueuePilot
    </h1>
  </div>
</header>

  );
};

export default Navbar;
