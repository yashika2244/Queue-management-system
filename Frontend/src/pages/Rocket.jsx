import React from "react";
import { FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";

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
    <>
         <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <Navbar />

{/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="flex-1 bg-[#f4fbf9] min-h-screen px-4 md:px-10 py-10 font-sans">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h1 className="text-4xl md:text-md font-semibold text-[#002f2b] leading-tight">
                Get started with{" "}
                <span className="text-[#00ccb4]">QueuePilot</span> 🚀
              </h1>
              <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                Here's a short walkthrough to help you set up your location’s
                service flow efficiently.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="max-w-5xl mx-auto space-y-5">
              {featureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-[#00ccb4] transition duration-300 p-6 flex justify-between items-start gap-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center text-xl bg-[#e0f7f4] text-[#00b8a1] rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#003934] group-hover:text-[#00b8a1] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500 whitespace-nowrap hidden sm:block">
                    <p className="font-medium">{step.remainingSteps}</p>
                    <p>{step.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 text-sm text-gray-700">
              <button className="flex items-center gap-2 px-5 py-2 rounded-full hover:text-[#004d46] hover:bg-[#e0f7f4] transition duration-300 shadow-sm">
                <FaPhoneAlt className="text-[#00ccb4]" />
                <span className="font-medium">Schedule a call with sales</span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2 rounded-full hover:text-[#004d46] hover:bg-[#e0f7f4] transition duration-300 shadow-sm">
                <FaCommentDots className="text-[#00ccb4]" />
                <span className="font-medium">Ask a question in chat</span>
              </button>
            </div>
          </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
