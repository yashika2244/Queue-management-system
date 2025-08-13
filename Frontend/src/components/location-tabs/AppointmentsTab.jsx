import React, { useState } from "react";
import { Calendar } from "lucide-react";

export default function AppointmentsTab() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4">Appointments</h2>
          <p className="text-gray-600 mb-4">
            Allow your visitors to book appointments. Get started with selecting
            services, team members, and schedules.
          </p>
          <div className="flex flex-col items-center justify-center py-10">
            <div className="text-4xl mb-4 bg-gray-200 animate-bounce rounded-full p-3">
              <Calendar className="w-12 h-12 text-cyan-800 " />
            </div>
            <p className="mb-2 font-semibold">Get started with appointments!</p>
            <ol className="list-decimal list-inside space-y-3 text-left">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </span>
                <span>Select the services you want to offer for booking.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
                <span>Select the team members who will provide services.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
                <span>Set up schedules for your team members.</span>
              </li>
            </ol>
            <button
              onClick={() => setStep(2)}
              className="bg-cyan-700 hover:bg-cyan-900 font-semibold text-white px-6 py-3 mt-5 cursor-pointer rounded-lg"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Appointments Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ">
            {/* Header */}
            <div className="p-5 border-b border-gray-200 ">
              <h3 className="text-lg font-semibold text-gray-800">
                Appointments
              </h3>
              <p className="text-sm text-gray-500">
                Allow your visitors to book appointments.
              </p>
            </div>

            {/* Services */}
            <div className="p-5 border-b border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Services</h4>
              <p className="text-sm text-gray-500 mb-4">
                Which services can be booked.
              </p>

              {[
                { name: "Information", color: "bg-cyan-400" },
                { name: "Support", color: "bg-yellow-400" },
                { name: "Consultation", color: "bg-purple-400" },
              ].map((service, idx) => (
                <div
                  key={service.name}
                  className={`flex items-center justify-between py-3 ${
                    idx !== 0 ? "border-t border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${service.color}`}
                    ></span>
                    <span className="text-gray-700">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Off</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"></span>
                    </label>
                    <span className="text-gray-400 text-lg">&rsaquo;</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="p-5 border-b border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Availability</h4>
              <p className="text-sm text-gray-500 mb-4">
                Manage the schedule of your team members who offer appointments.
                This schedule shows your availability for bookings and is not
                linked to your opening hours.{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  Click here
                </a>{" "}
                to set your opening hours.
              </p>
              <div className="bg-gray-50 rounded-md p-5 flex justify-center">
                <button className="px-5 py-2 bg-cyan-700 hover:bg-cyan-800 cursor-pointer text-white font-medium rounded-lg shadow-sm transition">
                  + Assign team members
                </button>
              </div>
            </div>

            {/* Limits */}
            <div className="p-5 border-b border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Limits</h4>
              <p className="text-sm text-gray-500 mb-4">
                Set guardrails for booking frequency.
              </p>

              {/* Minimum notice */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-gray-200 first:border-t-0">
                {/* Left Section */}
                <div className="max-w-sm">
                  <p className="font-medium text-gray-800">Minimum notice</p>
                  <p className="text-sm text-gray-500">
                    Set the minimum amount of notice that is required.
                  </p>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <input
                    type="number"
                    defaultValue={2}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-2 text-center text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>hours</option>
                    <option>days</option>
                  </select>
                  <span className="text-sm text-gray-600">
                    of an event start time.
                  </span>
                </div>
              </div>

              {/* Date range */}
              <div className="flex flex-wrap items-center justify-between py-4 border-t border-gray-200">
                {/* Left Text */}
                <div className="max-w-md">
                  <p className="text-base font-semibold text-gray-800">
                    Date range
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    How much in advance can your services be booked?
                  </p>
                </div>

                {/* Input Controls */}
                <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <input
                    type="number"
                    defaultValue={2}
                    min={1}
                    className="w-20 border border-gray-300 rounded-lg px-3 py-1.5 text-center text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                    <option>months</option>
                    <option>weeks</option>
                  </select>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    into the future
                  </span>
                </div>
              </div>
            </div>

            {/* Automated Text messages */}
            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md bg-white transition-all duration-200">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-teal-50 text-teal-600 rounded-full text-xl">
                  💬
                </div>

                {/* Text Content */}
                <div>
                  <p className="font-semibold text-gray-800 flex items-center">
                    Automated Text Messages
                    <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                      Inactive
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Set up automated text messages for confirmations and
                    cancellations.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="px-4 py-1.5 text-sm font-medium border border-cyan-500 text-cyan-600 rounded-lg hover:bg-teal-50 transition-colors">
                Set up →
              </button>
            </div>

            {/* Online booking */}
            <div className="flex items-center justify-between p-5 bg-white hover:shadow-sm hover:border-gray-200 border border-transparent rounded-xl transition-all duration-200">
              {/* Left Side */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 text-2xl">
                  🌐
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-gray-800 flex items-center gap-2">
                    Online booking via Visitor website
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">
                      Inactive
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Set up a website that enables your visitors to book
                    appointments effortlessly.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="px-4 py-1.5 text-sm font-medium border border-cyan-500 text-cyan-600 rounded-lg hover:bg-teal-50 transition-colors">
                Settings →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
