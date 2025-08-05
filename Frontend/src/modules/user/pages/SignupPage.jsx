


// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// const SignUpForm = () => {
//   const baseURL = import.meta.env.VITE_API_BASE_URL;
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim())
//       newErrors.firstName = "Please enter your first name.";
//     if (!formData.lastName.trim())
//       newErrors.lastName = "Please enter your last name.";
//     if (!formData.email.includes("@"))
//       newErrors.email = "Enter a valid email address.";
//     if (formData.password.length < 10)
//       newErrors.password = "Password must be at least 10 characters long.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       const res = await fetch(`${baseURL}/api/auth/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         const fieldErrors = {};
//         if (result.message?.includes("First"))
//           fieldErrors.firstName = result.message;
//         else if (result.message?.includes("Last"))
//           fieldErrors.lastName = result.message;
//         else if (result.message?.includes("Email"))
//           fieldErrors.email = result.message;
//         else if (result.message?.includes("Password"))
//           fieldErrors.password = result.message;
//         else toast.error(result.message || "Signup failed");
//         setErrors(fieldErrors);
//       } else {
//         toast.success("Signup successful!");
//         localStorage.setItem("token", result.token);
//         navigate("/setup/trial");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Branding Section */}
//       <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-teal-700 via-teal-800 to-green-900 text-white flex-col justify-center px-16 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
//         <h1 className="text-5xl font-extrabold leading-tight">
//           Welcome to <span className="text-green-300">QueuePilot</span>
//         </h1>
//         <p className="mt-4 text-lg opacity-90">
//           Simplify your queue management and deliver a better experience to your customers.
//         </p>
//         <img src="/deals.svg" alt="Illustration" className="w-80 mt-10 drop-shadow-2xl" />
//       </div>

//       {/* Right Form Section */}
//       <div className="flex-1 flex items-center justify-center bg-gray-50 px-6">
//         <div className="w-full max-w-md shadow-2xl rounded-2xl p-10 relative">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
//             <p className="text-gray-500 mt-2 text-sm">
//               Start your 14-day free trial • No credit card required
//             </p>
//           </div>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* First & Last Name */}
//             <div className="flex flex-col gap-4">
//               <div className="w-full">
//                 <input
//                   name="firstName"
//                   type="text"
//                   placeholder="First name *"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className={`w-full border-b rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//               </div>
//               <div className="w-full">
//                 <input
//                   name="lastName"
//                   type="text"
//                   placeholder="Last name *"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className={`w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Work email *"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <input
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password *"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-3 text-gray-500 cursor-pointer"
//               >
//                 {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
//               </span>
//               <p className="text-xs text-gray-500 mt-1">✓ Minimum 10 characters</p>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//             </div>

//             {/* Terms */}
//             <p className="text-xs text-gray-600 text-center">
//               By signing up, you agree to our{" "}
//               <a href="#" className="text-teal-600 hover:underline">Terms</a> &{" "}
//               <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>.
//             </p>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
//             >
//               Start Free Trial
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-600 mt-6">
//             Already have an account?{" "}
//             <a href="/login" className="text-teal-600 hover:underline">Log in</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

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
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Please enter your first name.";
    if (!formData.lastName.trim()) newErrors.lastName = "Please enter your last name.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address.";
    if (formData.password.length < 10) newErrors.password = "Password must be at least 10 characters.";
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
        if (result.message?.includes("First")) fieldErrors.firstName = result.message;
        else if (result.message?.includes("Last")) fieldErrors.lastName = result.message;
        else if (result.message?.includes("Email")) fieldErrors.email = result.message;
        else if (result.message?.includes("Password")) fieldErrors.password = result.message;
        else toast.error(result.message || "Signup failed");
        setErrors(fieldErrors);
      } else {
        toast.success("Signup successful!");
        localStorage.setItem("token", result.token);
          localStorage.setItem("signupUserId", result.user.id); 
        navigate("/setup/trial");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex font-['Inter']">
      {/* LEFT SECTION - SIGNUP FORM */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-12">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-teal-600">Queue</span>Pilot
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Create Your Account</h2>
        <p className="text-gray-500 text-sm mb-6">Start your 14-day free trial • No credit card required</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border rounded-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last name *"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border rounded-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Work email *"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border rounded-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password *"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            <p className="text-xs text-gray-500 mt-1">✓ Minimum 10 characters</p>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-600 text-center">
            By signing up, you agree to our{" "}
            <a href="#" className="text-teal-600 hover:underline">Terms</a> &{" "}
            <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>.
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-600 cursor-pointer text-white rounded-full px-20 py-3 hover:opacity-90 transition shadow-md"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT SECTION - INFO / ILLUSTRATION */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#2ed3b6] to-[#28a59b] text-white flex-col justify-center items-center text-center p-12 relative">
        <button
          className="absolute top-6 right-6 text-white text-2xl hover:opacity-80"
          onClick={() => navigate("/")}
        >
          ✕
        </button>
        <h3 className="text-4xl font-bold mb-4">Already Registered?</h3>
        <p className="text-white/90 mb-6 text-lg max-w-sm">
          Log in and continue managing your queues efficiently with QueuePilot.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-[#27c7a8] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Log In
        </button>

        {/* Background Shapes */}
        <div className="absolute w-40 h-40 bg-white/10 rounded-full top-12 left-12"></div>
        <div className="absolute w-28 h-28 bg-white/10 rounded-full bottom-16 right-20"></div>
        <div className="absolute w-24 h-24 bg-white/10 rounded-full bottom-8 left-24"></div>
      </div>
    </div>
  );
};

export default SignUpForm;
