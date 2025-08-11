// src/components/CheckInKiosk.jsx
import React from "react";
import KeyboardSlider from "./KeyboardSlider";

const CheckInKiosk = () => {
  return (
    <section className="bg-[#f9fdfb] py-14 px-6 md:px-20">
      {/* Section Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Transform Customer Experience with Self Check-In
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Empower customers to skip the line and get served faster with QueuePilot’s smart kiosk solution.
        </p>
      </div>

      {/* Main content layout */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16">
        {/* Left side - Feature list */}
        <div className="max-w-lg w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Why Use Our Check-In Kiosk?
          </h2>
          <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <li className="flex items-start gap-3">✅ Enable self-check-in for waiting lines via iPad</li>
            <li className="flex items-start gap-3">✅ Capture customer information and data</li>
            <li className="flex items-start gap-3">✅ Minimize frustration and human error</li>
            <li className="flex items-start gap-3">✅ Offer a multilingual interface</li>
          </ul>
          <a
            href="#"
            className="inline-block mt-8 text-emerald-700 hover:underline text-lg font-medium"
          >
            Learn more →
          </a>
        </div>

        {/* Right side - Kiosk UI */}
        <div className="bg-emerald-400 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          <div className="bg-white px-8 py-12 text-center rounded-t-2xl">
            <img
              src="/logo.png"
              alt="Logo"
              className="mx-auto mb-6 w-24 h-auto"
            />
            <h3 className="text-2xl text-gray-600 mb-1">Welcome!</h3>
            <p className="text-4xl font-bold text-gray-900">Emily R</p>
            <button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full text-3xl shadow-lg">
              &gt;
            </button>
          </div>

          {/* Keyboard image slider */}
          <KeyboardSlider />
        </div>
      </div>
    </section>
  );
};

export default CheckInKiosk;
