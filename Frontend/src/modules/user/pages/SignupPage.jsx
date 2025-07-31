import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "Please enter your first name.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Please enter your last name.";
    if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email address.";
    if (formData.password.length < 10)
      newErrors.password = "Password must be at least 10 characters long.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${baseURL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        const fieldErrors = {};
        if (result.message?.includes("First"))
          fieldErrors.firstName = result.message;
        else if (result.message?.includes("Last"))
          fieldErrors.lastName = result.message;
        else if (result.message?.includes("Email"))
          fieldErrors.email = result.message;
        else if (result.message?.includes("Password"))
          fieldErrors.password = result.message;
        else toast.error(result.message || "Signup failed");
        setErrors(fieldErrors);
      } else {
        toast.success("Signup successful!");
        localStorage.setItem("token", result.token);
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/30 lg:px-4">
      {/* <div className="bg-white w-full max-w-xl rounded-lg shadow-2xl px-10 py-15 lg:mt-6 space-x-6"> */}
<div className="w-full lg:max-w-xl bg-white rounded-lg shadow-2xl  px-10 py-15  lg:mt-6  mx-auto space-x-6">
        <div className="flex justify-center mb-15 md:mt-0  text-3xl font-bold text-teal-900">
          <i>
           <span className="text-4xl font-extrabold">Q
            </span> 
            ueue<span className="text-teal-600">Pilot</span>
          </i>
        </div>

        <div className="-mt-8">
          <h2 className="text-3xl font-[500] text-center text-[rgb(37, 39, 35)]">
            Get started with QueuePilot
          </h2>
          <p
            className="text-center text-gray-600 mt-3 mb-8 text-[10px ] font-[400]"
            style={{
              fontFamily: `"Skolar Sans Latin Web", "Helvetica Neue", Helvetica, Arial, sans-serif`,
              fontKerning: "normal",
              fontFeatureSettings: `"kern", "liga", "calt"`,
            }}
          >
            Sign up for a 14-day free trial. No credit card required.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="lg:w-1/2 w-full">
              <input
                name="firstName"
                type="text"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border bg-gray-100 text-[#101828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-600 placeholder:text-base placeholder:text-gray-400 ${
                  errors.firstName ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="lg:w-1/2  w-full">
              <input
                name="lastName"
                type="text"
                placeholder="Last name *"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border bg-gray-100 text-[#101828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-600 placeholder:text-base placeholder:text-gray-400 ${
                  errors.lastName ? "border-red-500" : "border-gray-500"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Work e-mail *"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border bg-gray-100 text-[#101828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-600 placeholder:text-base placeholder:text-gray-400 ${
                errors.email ? "border-red-500" : "border-gray-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border bg-gray-100 text-[#101828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-teal-600 placeholder:text-base placeholder:text-gray-400 ${
                errors.password ? "border-red-500" : "border-gray-500"
              }`}
              minLength={10}
            />
            <p className="text-xs text-gray-500 mt-1 mx-4">
              ✓ Minimum 10 characters
            </p>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <p className="text-sm text-center text-gray-700 mt-6">
            By signing up, you agree to our{" "}
            <a href="#" className="text-teal-700 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-teal-700 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-[#12706e] text-white py-3 rounded-md font-semibold text-md mt-1 text-bold hover:bg-teal-800 cursor-pointer"
          >
            Start free trial
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-8">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 hover:underline">
            Log in now
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
