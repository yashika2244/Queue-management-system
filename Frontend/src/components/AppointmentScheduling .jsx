import { CheckCircle, CalendarDays, Clock, User } from "lucide-react";

const AppointmentScheduling = () => {
  const features = [
    "Display your availability online",
    "Receive appointments and changes in real-time",
    "Send automated reminders for upcoming bookings",
    "Confirm if visitor has arrived and checked in",
  ];

  const timeSlots = ["10:30am", "11:30am", "12:00pm"];
  const selectedTime = "11:30am";

  const visitors = [
    { name: "Adam Santos", type: "Appointment", time: "11:15am", badge: "purple" },
    { name: "Michelle Rodriguez", type: "Walk-in", time: "2 min", badge: "green" },
    { name: "Elaine Parker", type: "Walk-in", time: "< 1 min", badge: "green" },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
      {/* Left Side: Info */}
      <div className="max-w-xl space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-bold text-gray-900">Appointment scheduling</h2>
          <span className="text-xs font-bold bg-purple-600 text-white px-3 py-1 rounded-full shadow-sm">
            NEW
          </span>
        </div>

        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-gray-700">
              <CheckCircle size={20} className="text-emerald-600 mt-1" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="inline-block text-emerald-700 font-semibold text-base hover:underline"
        >
          Learn more →
        </a>
      </div>

      {/* Right Side: UI Cards */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
      {/* Schedule Appointment Card */}
   


      <div className="w-[320px] bg-white rounded-2xl border-8 border-teal-500 shadow-sm p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Schedule Appointment</h3>
          <CalendarDays className="text-gray-500" size={20} />
        </div>

        <div className="text-center text-sm text-gray-500 font-medium">
          Monday, December 5, 2023
        </div>

        <div className="space-y-2">
          {timeSlots.map((slot, i) => (
            <button
              key={i}
              className={`w-full py-2 rounded-lg border text-sm font-medium transition-all ${
                slot === selectedTime
                  ? "bg-emerald-50 text-emerald-700 border-emerald-600"
                  : "bg-gray-50 text-gray-600 border-gray-300 "
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        <button className="w-full py-2 rounded-lg bg-emerald-700 text-white font-semibold  transition">
          Confirm Booking
        </button>
      </div>
      {/* Visitors Queue Card */}
      <div className="w-[320px] bg-white rounded-2xl  border-8 border-teal-500  shadow-sm p-4 space-y-4">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-gray-800">Current Visitors</h4>
          <Clock size={18} className="text-gray-400" />
        </div>

        {visitors.map((v, i) => (
          <div
            key={i}
            className="flex justify-between items-center border border-gray-100 bg-gray-50 px-3 py-2 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <User size={16} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-800">{v.name}</span>
            </div>

            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${
                v.badge === "purple" ? "bg-purple-600" : "bg-green-600"
              }`}
            >
              {v.type === "Appointment" ? `${v.type} ${v.time}` : `⏱ ${v.time}`}
            </span>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default AppointmentScheduling;
