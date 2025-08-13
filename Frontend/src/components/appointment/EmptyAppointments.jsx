// src/components/EmptyAppointments.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyAppointments = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-end h-full text-center px-4">
      {/* Illustration */}
      <img
        src="/appointment.jpg" // apni illustration ka path yaha do
        alt="Appointments illustration"
        className="w-64 h-56 mb-6"
      />

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Appointments are here.
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-md mb-10">
        Set up Appointments and let your visitors schedule their visits. Customize as needed.
      </p>

      {/* CTA Button */}
      <button
  onClick={() => navigate("/location/appointment-settings", { state: { activeTab: "Appointments" } })}
  className="bg-cyan-700 hover:bg-cyan-900 cursor-pointer md:mb-15 text-white px-6 py-3 rounded-lg font-medium shadow"
>
  Set up Appointments
</button>

    </div>
  );
};

export default EmptyAppointments;
