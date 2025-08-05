import React from 'react';
import { FaPhoneAlt, FaCommentDots } from 'react-icons/fa';

const GetStarted = () => {
  const featureSteps = [
    {
      icon: "👋",
      title: "Welcoming visitors",
      desc: "Create a service flow that fits your location. Offer multiple check-in options, keep visitors informed.",
      time: "About 5 min",
    },
    {
      icon: "🧑‍💼",
      title: "Providing service",
      desc: "Manage the waitlist in real-time. Always know who is next in line, ensure a smooth service.",
      time: "About 4 min",
    },
    {
      icon: "📊",
      title: "Data for managers",
      desc: "Track wait & service times. Identify peak hours, uncover bottlenecks. Automated reporting.",
      time: "About 6 min",
    },
  ];

  return (
    <div className="flex-1 bg-[#f4fbf9] min-h-screen px-4 md:px-10 py-14 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-[#002f2b] leading-tight">
          Get started with <span className="text-[#00ccb4]">QueuePilot</span> 🚀
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg">
          Here's a short walkthrough to help you set up your location’s service flow efficiently.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        {featureSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 flex justify-between items-start gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center text-xl bg-[#e0f7f4] text-[#00b8a1] rounded-full shadow-sm">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#003934]">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500 whitespace-nowrap hidden sm:block">
              <p className="font-medium">4 steps left</p>
              <p>{step.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16 text-sm text-gray-700">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:text-[#004d46] hover:bg-[#e0f7f4] transition">
          <FaPhoneAlt />
          <span>Schedule a call with sales</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:text-[#004d46] hover:bg-[#e0f7f4] transition">
          <FaCommentDots />
          <span>Ask a question in chat</span>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
