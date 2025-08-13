
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { startFreeTrial } from "../api/authApi";

export default function StartTrial() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim())
      newErrors.firstName = "Please enter your first name.";
    if (!form.lastName.trim())
      newErrors.lastName = "Please enter your last name.";
    if (!form.email.includes("@"))
      newErrors.email = "Enter a valid email address.";
    if (form.password.length < 10)
      newErrors.password = "Password must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await startFreeTrial(form);
      console.log(res);

      // Store token only if it exists
   if (res?.token) {
  localStorage.setItem("token", res.token);
} else {
  localStorage.removeItem("token");
}
      // Store signupUserId only if it exists
    if (res?._id) {
  localStorage.setItem("signupUserId", res._id);
} else {
  localStorage.removeItem("signupUserId");
}

      // Store user only if it exists and is valid
    if (res?.user) {
  localStorage.setItem("user", JSON.stringify(res.user));
} else {
  localStorage.removeItem("user");
}
      toast.success("Free trial started!");
      navigate("/start-trial");
    } catch (err) {
      console.error("Error starting trial:", err.response?.data || err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      {/* LEFT SECTION - FORM */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-8 md:py-0">
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            <span className="text-teal-600">Queue</span>Pilot
          </h1>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">
          Start Your Free Trial
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mb-6 text-center md:text-left">
          14-day free trial • No credit card required
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 text-sm sm:text-base bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last name *"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 text-sm sm:text-base bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Work email *"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-3 text-sm sm:text-base bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password *"
              value={form.password}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-3 text-sm sm:text-base bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-xs text-gray-500 mt-1">✓ Minimum 10 characters</p>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-600 text-white rounded-lg px-12 sm:px-20 py-3 cursor-pointer hover:opacity-90 transition shadow-md text-sm sm:text-base"
            >
              Start Free Trial
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#2ed3b6] to-[#28a59b] text-white flex flex-col justify-center items-center text-center p-8 sm:p-12 relative">
        <h3 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
          Already Have an Account?
        </h3>
        <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-lg max-w-sm">
          Log in and continue managing your queues efficiently with QueuePilot.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-[#27c7a8] px-6 sm:px-8 py-2 sm:py-3 rounded-lg cursor-pointer font-semibold hover:bg-gray-100 transition shadow-md text-sm sm:text-base"
        >
          Log In
        </button>

        {/* Decorative circles */}
        <div className="hidden md:block absolute w-40 h-40 bg-white/10 rounded-full top-12 left-12"></div>
        <div className="hidden md:block absolute w-28 h-28 bg-white/10 rounded-full bottom-16 right-20"></div>
        <div className="hidden md:block absolute w-24 h-24 bg-white/10 rounded-full bottom-8 left-24"></div>
      </div>
    </div>
  );
}
