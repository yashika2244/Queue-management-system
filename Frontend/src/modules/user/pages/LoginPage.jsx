// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { RiArrowRightSLine } from "react-icons/ri";
// // export default function LoginPageFrom() {
// //   const navigate = useNavigate();
// //   const baseURL = import.meta.env.VITE_API_BASE_URL;

// //   const [formData, setFormData] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const res = await fetch(`${baseURL}/api/auth/login`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await res.json();

// //       if (!res.ok) {
// //         setError(data.message);
// //       } else {
// //         localStorage.setItem("token", data.token);
// //         navigate("/dashboard"); // or wherever you want to go
// //       }
// //     } catch (err) {
// //       setError("Something went wrong. Try again.");
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen flex flex-col md:flex-row "
// //       style={{
// //         fontFamily:
// //           '"Skolar Sans Latin Web", "Helvetica Neue", Helvetica, Arial, sans-serif',
// //       }}
// //     >
// //       {/* Left Side - Login */}
// //       <div className="w-full md:w-3/5 bg-[rgb(52,223,116)] text-white flex flex-col px-2 ">
// //         <div className="px-6 pt-6 md:px-18">
// //           <div className="flex items-center space-x-2">
// //             <span className="md:text-3xl text-2xl font-bold italic text-white">
// //               Queue<span className="text-black">Pilot</span>
// //             </span>
// //           </div>
// //         </div>

// //         <div className="w-full px-6 md:px-24 lg:ml-18  py-8 md:py-15 max-w-3xl mx-auto ">
// //           <h2 className="text-4xl text-teal-900 mb-2">Log in</h2>
// //           <p className="text-[#013b3b] md:mb-10 mb-5 lg:mt-6 mt-3  lg:text-[16px] text-sm">
// //             Don't have an account?{" "}
// //             <span className="font-[600] cursor-pointer  text-[#014242] text-md leading-6 inline-flex items-center"
// //             onClick={()=>navigate('/signup')}
// //             >
// //               Sign up here <RiArrowRightSLine className=" text-3xl font-[200]" />
// //             </span>
// //           </p>

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label className="block text-[#013b3b] md:text-lg text-sm mb-1 leading-6">
// //                 Email
// //               </label>
// //               <input
// //                 name="email"
// //                 type="email"
// //                 placeholder="john@example.com"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full border-b text-[21px] border-[#013b3b] focus:border-white bg-transparent placeholder:text-[#4b7c7c] md:placeholder:text-[18px] placeholder:text-[16px] text-[#045151] focus:outline-none py-2"
// //               />
// //             </div>

// //             <div>
// //               <label className="block text-[#013b3b] md:text-lg text-sm mb-1 leading-7">
// //                 Password
// //               </label>
// //               <input
// //                 name="password"
// //                 type="password"
// //                 placeholder="Enter your password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 className="w-full border-b text-[21px] bg-transparent placeholder:text-[#4b7c7c] md:placeholder:text-[18px] text-[#045151] border-[#013b3b] focus:border-white focus:outline-none py-2 placeholder:text-[16px]"
// //               />
// //             </div>

// //             {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
// //             <div className="flex justify-between items-center text-md font-[500] text-[#013b3b] leading-6 mt-6">
// //               <span></span>
// //               <a href="#" className="hover:underline">
// //                 Forgot password?
// //               </a>
// //             </div>
// //             <div className="flex md:justify-end justify-center md:mb-0 mb-8">
// //               <button
// //                 type="submit"
// //                 className="bg-white text-[#013b3b] w-full lg:w-auto hover:text-[#70f166] py-4.5 px-18 md:mt-5 font-semibold shadow-md text-lg hover:opacity-90 transition hover:bg-[#013b3b] cursor-pointer"
// //               >
// //                 Log in!
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>

// //       {/* Right Side - Info */}
// //       <div className=" flex w-full md:w-2/5 bg-white items-center  px-6 md:px-15 py-10 md:py-0 ">
// //         <div className=" md:text-left p-8 lg:p-0">
// //           <p className="text-[22px] text-gray-500 mb-2">Hi, I’m Mirjam!</p>
// //           <p className="text-gray-500 text-base mb-4">
// //             I will help you get the most <br /> out of Qminder.
// //           </p>
// //           <img
// //             src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2.5&w=120&h=120&q=100"
// //             alt="Mirjam"
// //             className="w-30 h-30 rounded-full mb-3 object-cover  md:mx-0"
// //           />
// //           <p className="text-[#28D17C] font-[500] text-xl mb-2">Mirjam Nugis</p>
// //           <p className="text-gray-500 text-lg">Customer Success Manager</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Replace with API login logic
//   };

//   return (
//     <div className="min-h-screen flex font-['Inter']">
//       {/* LEFT SIDE - LOGIN FORM */}
//       <div className="w-full md:w-1/2 flex flex-col justify-center px-12">
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-2xl font-bold text-gray-800">
//             <span className="text-teal-600">Queue</span>Pilot
//           </h1>
//         </div>

//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-3">
//           Login to Your Account
//         </h2>
//         <p className="text-gray-500 text-sm mb-6">
//           Login using social networks
//         </p>

//         {/* Social Buttons */}
//         <div className="flex gap-4 mb-6">
//           <button className="w-12 h-12 rounded-full bg-[#3b5998] text-white flex items-center justify-center shadow hover:opacity-90 transition">
//             <FaFacebookF size={18} />
//           </button>
//           <button className="w-12 h-12 rounded-full bg-[#db4a39] text-white flex items-center justify-center shadow hover:opacity-90 transition">
//             <FaGooglePlusG size={22} />
//           </button>
//           <button className="w-12 h-12 rounded-full bg-[#0e76a8] text-white flex items-center justify-center shadow hover:opacity-90 transition">
//             <FaLinkedinIn size={18} />
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="flex items-center mb-6">
//           <div className="flex-1 h-px bg-gray-300"></div>
//           <span className="mx-3 text-gray-400 text-sm">OR</span>
//           <div className="flex-1 h-px bg-gray-300"></div>
//         </div>

//         {/* Form */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border rounded-full  border-gray-300 px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               className="w-full border border-gray-300 rounded-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-600"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-3 text-gray-500 cursor-pointer"
//             >
//               {showPassword ? <FiEyeOff /> : <FiEye />}
//             </span>
//           </div>
//           <div className=" flex justify-center">
//             <button
//               type="submit"
//               className=" bg-teal-600 cursor-pointer text-white rounded-full px-20 py-3 hover:opacity-90 transition shadow-md"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* RIGHT SIDE - SIGNUP PROMO */}
//       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#2ed3b6] to-[#28a59b] text-white flex-col justify-center items-center text-center p-12 relative">
//         <button
//           className="absolute top-6 right-6 text-white text-2xl hover:opacity-80"
//           onClick={() => navigate("/")}
//         >
//           ✕
//         </button>
//         <h3 className="text-4xl font-bold mb-4">New Here?</h3>
//         <p className="text-white/90 mb-6 text-lg max-w-sm">
//           Sign up and discover a great amount of new opportunities!
//         </p>
//         <button
//           onClick={() => navigate("/signup")}
//           className="bg-white text-[#27c7a8] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md"
//         >
//           Sign Up
//         </button>

//         {/* Background Shapes */}
//         <div className="absolute w-40 h-40 bg-white/10 rounded-full top-12 left-12"></div>
//         <div className="absolute w-28 h-28 bg-white/10 rounded-full bottom-16 right-20"></div>
//         <div className="absolute w-24 h-24 bg-white/10 rounded-full bottom-8 left-24"></div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email address.";
    if (!formData.password)
      newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch(`${baseURL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Login failed");
      } else {
        toast.success("Login successful!");
        localStorage.setItem("token", result.token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Branding Section */}
     <div className="hidden lg:flex w-1/2 bg-teal-50 flex-col justify-center px-16 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Welcome to <span className="text-teal-600">QueuePilot</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Simplify your queue management and deliver a better experience to your customers.
        </p>
        <img src="/deals.svg" alt="Illustration" className="w-72 mt-10 opacity-90" />
      </div>


      {/* Right Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md shadow-2xl rounded-2xl p-10 relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Login to Your Account</h2>
            <p className="text-gray-500 mt-2 text-sm">Access your dashboard securely</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                placeholder="Work email *"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-3 bg-gray-50 text-sm focus:ring-2 focus:ring-teal-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </span>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            New here?{" "}
            <a href="/signup" className="text-teal-600 hover:underline">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
