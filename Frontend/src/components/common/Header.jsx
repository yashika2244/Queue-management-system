
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
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-cyan-800 tracking-wide cursor-pointer hover:text-cyan-600 hover:bg-cyan-50 px-3 py-1 rounded-lg transition"
          >
            QueuePilot
          </h1>

          {/* Auth Section */}
          {auth ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-gray-600 font-medium">
                Welcome, <span className="text-gray-900">{auth.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-sm transition"
              >
                <LogOut size={18} />
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-full shadow-sm transition"
            >
              <LogIn size={18} />
              <span className="hidden sm:block">Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
