import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(formData);
    setLoading(false);
    if (success)  navigate('/join');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgImage.jpg"
          alt="background design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Card */}
      <div className="absolute bottom-8 left-8 z-10 max-w-lg w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-10">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Please log in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or Mobile
            </label>
            <input
              type="text"
              name="identifier"
              placeholder="Enter email or phone"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
              disabled={loading}
            />
            <div className="text-right mt-2">
              <span
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                Forgot Password?
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
