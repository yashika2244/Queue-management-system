import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginStaff } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await loginStaff(form);

      // Save token to localStorage
      localStorage.setItem("token", userData.token);

      // Proceed with login
      login(userData);
      navigate("/dashboard");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row "
       style={{ fontFamily: "Urbanist, sans-serif" }}
       >
      {/* Left Branding Section (only on lg screens) */}
      <div className="hidden lg:flex w-1/2 bg-teal-50 flex-col justify-center px-16 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Welcome to <span className="text-teal-600">QueuePilot</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Simplify your queue management and deliver a better experience to your
          customers.
        </p>
        <img
          src="/deals.svg"
          alt="Illustration"
          className="w-72 mt-10 opacity-90"
        />
      </div>

      {/* Right Login Form */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-white to-teal-50 px-4 sm:px-6 md:px-8 py-8">
        <div className="w-full max-w-md shadow-lg md:shadow-2xl rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 bg-white">
          {/* Mobile Branding (only on small screens) */}
          <div className="text-center mb-6 lg:hidden ">
            <div className="flex justify-center mb-3 ">
              <img
                src="/loginImage.png"
                alt="QueuePilot"
                className="w-14 h-14"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Queue<span className="text-teal-600">Pilot</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your queues efficiently
            </p>
          </div>

          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Login to Your Account
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Access your dashboard securely
            </p>
          </div>

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Work email *"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 border-gray-300"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                name="password"
                type="password"
                placeholder="Password *"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 border-gray-300"
              />
              <span className="absolute right-4 top-3 text-gray-500 cursor-pointer"></span>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 cursor-pointer text-white py-3 rounded-lg font-semibold shadow-md transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            New here?{" "}
            <a href="/signup" className="text-teal-600 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
