import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import CheckInKiosk from "../components/CheckInKiosk";
import { CheckCircle } from "lucide-react";
import AppointmentScheduling from "../components/AppointmentScheduling ";
const HomePage = () => {
    const companies = [
  "Apple", "AT&T", "Uber", "MainLibraries", "Verizon", "SJSU", "Bolt", "HCA"
];

const industries = [
  "Healthcare", "Government", "Child & School", "Education", "Logistics", "Departments", "Retail", "Banking"
];
  return (
    <div
      className="min-h-screen bg-white flex flex-col "
      style={{ fontFamily: "Urbanist, sans-serif" }}
    >
      <div className="">
        {/* Navbar */}
        <header className="w-full  sticky top-0 z-50 bg-gradient-to-br from-white to-[#f6fdfc]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Left: Logo + Nav */}
            <div className="flex items-center gap-10">
              <h1 className="text-3xl font-extrabold text-teal-700 tracking-tight">
                <span className="text-4xl text-teal-800  "> Q</span>ueuePilot
              </h1>
              <nav className="hidden md:flex gap-9 text-gray-700 font-medium relative z-50">
                {[
                  {
                    title: "Product",
                    items: ["Overview", "Queue Control", "Mobile App"],
                  },
                  {
                    title: "Features",
                    items: [
                      "Real-time Sync",
                      "Staff Analytics",
                      "Notifications",
                    ],
                  },
                  {
                    title: "Industries",
                    items: ["Healthcare", "Banking", "Retail"],
                  },
                  {
                    title: "Pricing",
                    items: ["Plans", "Enterprise", "Custom"],
                  },
                  {
                    title: "Resources",
                    items: ["Docs", "Blog", "Help Center"],
                  },
                ].map((menu) => (
                  <div key={menu.title} className="group relative ">
                    <button className="flex items-center gap-1 hover:text-teal-600 transition cursor-pointer">
                      {menu.title}
                      <MdKeyboardArrowDown size={18} />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute  top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 mt-2">
                      {menu.items.map((subItem) => (
                        <div
                          key={subItem}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right: Auth Buttons */}
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-gray-800 font-semibold   text-base  transition hover:bg-cyan-600 hover:text-white py-1 px-3 rounded-md"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-md font-semibold text-sm shadow-md transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-gradient-to-br from-white to-[#f6fdfc]">
          <div className="max-w-7xl mx-auto px-6 py-9 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Smart Queue Management <br /> for Smarter Businesses
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Empower your staff and delight your customers with real-time
                queue control, analytics, and seamless appointment handling —
                all with QueuePilot.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-3 border-2 border-teal-800 bg-teal-50 hover:bg-teal-800 text-teal-900 hover:text-white px-7 py-3 rounded-xl text-lg font-semibold transition shadow-lg"
              >
                Start Free Trial <ArrowRight size={20} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/queueImg.avif"
                alt="Queue dashboard"
                className="w-full h-auto"
                style={{ mixBlendMode: "darken" }}
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-yellow-100 blur-xl opacity-60" />
            </div>
          </div>
        </main>

      {/* Hero Section */}
<section className="bg-gradient-to-b from-[#e6f0ec] to-white py-28 px-6 flex flex-col items-center text-center relative">
  {/* Title */}
  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight max-w-5xl">
    Save <span className="text-emerald-600">1,000+ hours</span> of waiting
    <br className="hidden md:block" /> in line — every single day.
  </h1>

  {/* Subtitle */}
  <p className="text-gray-600 mt-6 max-w-2xl text-xl md:text-2xl font-medium">
    QueuePilot empowers clinics, retailers, and government offices to deliver seamless queuing experiences.
  </p>

  {/* Image Slider (Auto-scrolling) */}
<div className="mt-14 w-full overflow-hidden max-w-6xl">
  <div className="flex gap-4 slider-track">
    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((imgIndex, i) => (
      <div
        key={i}
        className="min-w-[160px] h-28 bg-gray-200 rounded-xl shadow-sm flex items-center justify-center overflow-hidden"
      >
        <img
          src={`/images/slider/image-${imgIndex}.jpg`}
          alt={`Slide ${imgIndex}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>


  {/* Company Names */}
  <div className="mt-16 flex flex-wrap justify-center gap-6 max-w-4xl opacity-90">
    {companies.map((name, i) => (
      <div
        key={i}
        className="text-base text-gray-500 font-semibold uppercase tracking-wider hover:text-gray-700 transition"
      >
        {name}
      </div>
    ))}
  </div>

  {/* Industry Tags */}
  <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl">
    {industries.map((tag, i) => (
      <span
        key={i}
        className="bg-emerald-700 hover:bg-emerald-800 transition text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* CTA */}
  <button className="mt-14 bg-emerald-700 hover:bg-emerald-800 transition px-6 py-3 text-white text-base font-semibold rounded-lg shadow-lg">
    📚 Read Real Case Studies
  </button>

  {/* Inline CSS for slider animation */}
  <style>{`
    .slider-track {
      animation: slide-left 30s linear infinite;
    }

    @keyframes slide-left {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>

{/* queue management software section */}
 <CheckInKiosk/>
 
 {/* Appointments  */}
  <AppointmentScheduling/>
      </div>
    </div>
  );
};

export default HomePage;
