import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
export default function LoginPageFrom() {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${baseURL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
      } else {
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // or wherever you want to go
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row "
      style={{
        fontFamily:
          '"Skolar Sans Latin Web", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {/* Left Side - Login */}
      <div className="w-full md:w-3/5 bg-[rgb(52,223,116)] text-white flex flex-col px-2 ">
        <div className="px-6 pt-6 md:px-18">
          <div className="flex items-center space-x-2">
            <span className="md:text-3xl text-2xl font-bold italic text-white">
              Queue<span className="text-black">Pilot</span>
            </span>
          </div>
        </div>

        <div className="w-full px-6 md:px-24 lg:ml-18  py-8 md:py-15 max-w-3xl mx-auto ">
          <h2 className="text-4xl text-teal-900 mb-2">Log in</h2>
          <p className="text-[#013b3b] md:mb-10 mb-5 lg:mt-6 mt-3  lg:text-[16px] text-sm">
            Don't have an account?{" "}
            <span className="font-[600] cursor-pointer  text-[#014242] text-md leading-6 inline-flex items-center"
            onClick={()=>navigate('/signup')}
            >
              Sign up here <RiArrowRightSLine className=" text-3xl font-[200]" />
            </span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#013b3b] md:text-lg text-sm mb-1 leading-6">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b text-[21px] border-[#013b3b] focus:border-white bg-transparent placeholder:text-[#4b7c7c] md:placeholder:text-[18px] placeholder:text-[16px] text-[#045151] focus:outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-[#013b3b] md:text-lg text-sm mb-1 leading-7">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b text-[21px] bg-transparent placeholder:text-[#4b7c7c] md:placeholder:text-[18px] text-[#045151] border-[#013b3b] focus:border-white focus:outline-none py-2 placeholder:text-[16px]"
              />
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            <div className="flex justify-between items-center text-md font-[500] text-[#013b3b] leading-6 mt-6">
              <span></span>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="flex md:justify-end justify-center md:mb-0 mb-8">
              <button
                type="submit"
                className="bg-white text-[#013b3b] w-full lg:w-auto hover:text-[#70f166] py-4.5 px-18 md:mt-5 font-semibold shadow-md text-lg hover:opacity-90 transition hover:bg-[#013b3b] cursor-pointer"
              >
                Log in!
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Info */}
      <div className=" flex w-full md:w-2/5 bg-white items-center  px-6 md:px-15 py-10 md:py-0 ">
        <div className=" md:text-left p-8 lg:p-0">
          <p className="text-[22px] text-gray-500 mb-2">Hi, I’m Mirjam!</p>
          <p className="text-gray-500 text-base mb-4">
            I will help you get the most <br /> out of Qminder.
          </p>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2.5&w=120&h=120&q=100"
            alt="Mirjam"
            className="w-30 h-30 rounded-full mb-3 object-cover  md:mx-0"
          />
          <p className="text-[#28D17C] font-[500] text-xl mb-2">Mirjam Nugis</p>
          <p className="text-gray-500 text-lg">Customer Success Manager</p>
        </div>
      </div>
    </div>
  );
}
