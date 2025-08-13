// // src/components/appointment/AppointmentList.jsx
// import React, { useEffect, useState } from "react";
// import { getAppointments, cancelAppointment } from "../../api/appointmentApi";

// const AppointmentList = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchAppointments = async () => {
//     const data = await getAppointments();
//     setAppointments(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const handleCancel = async (id) => {
//     const confirmed = window.confirm("Are you sure you want to cancel?");
//     if (!confirmed) return;
//     await cancelAppointment(id);
//     fetchAppointments();
//   };

//   if (loading) return <p className="text-center">Loading appointments...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No appointments found.</p>
//       ) : (
//         <div className="bg-white shadow rounded-lg">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-700">
//                 <th className="p-3 border-b">Name</th>
//                 <th className="p-3 border-b">Phone</th>
//                 <th className="p-3 border-b">Branch</th>
//                 <th className="p-3 border-b">Service</th>
//                 <th className="p-3 border-b">Status</th>
//                 <th className="p-3 border-b">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((appt) => (
//                 <tr key={appt._id} className="hover:bg-gray-50">
//                   <td className="p-3 border-b">{appt.name}</td>
//                   <td className="p-3 border-b">{appt.phone}</td>
//                   <td className="p-3 border-b">{appt.branch?.name || "-"}</td>
//                   <td className="p-3 border-b">{appt.service?.name || "-"}</td>
//                   <td className="p-3 border-b capitalize">{appt.status}</td>
//                   <td className="p-3 border-b">
//                     {appt.status !== "cancelled" && (
//                       <button
//                         onClick={() => handleCancel(appt._id)}
//                         className="text-red-600 hover:underline"
//                       >
//                         Cancel
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AppointmentList;

import React, { useState } from "react";
import { Calendar } from "lucide-react";

const AppointmentsTab = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Appointments</h2>

      {showIntro ? (
        <>
          <p className="text-gray-600 mb-4">
            Allow your visitors to book appointments. Get started with
            selecting services, team members, and schedules.
          </p>
          <div className="flex flex-col items-center justify-center py-10">
            <div className="text-4xl mb-4 bg-gray-200 animate-bounce rounded-full p-3">
              <Calendar className="w-12 h-12 text-cyan-800 " />
            </div>
            <p className="mb-2 font-semibold">
              Get started with appointments!
            </p>
            <ol className="list-decimal list-inside space-y-3">
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
              onClick={() => setShowIntro(false)}
              className="bg-cyan-700 hover:bg-cyan-900 font-semibold text-white px-6 py-3 mt-5 cursor-pointer rounded-lg"
            >
              Continue
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          {/* Services Card */}
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 mb-2">Services</h3>
            <p className="text-sm text-gray-500 mb-4">
              Which services can be booked.
            </p>
            <div className="divide-y">
              {["Information", "Support", "Consultation"].map((service) => (
                <div
                  key={service}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>{service}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-cyan-700"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 mb-2">Availability</h3>
            <p className="text-sm text-gray-500 mb-4">
              Manage the schedule of your team members who offer appointments.
            </p>
            <div className="border border-dashed rounded-lg p-5 text-center">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm">
                + Assign team members
              </button>
            </div>
          </div>

          {/* Limits Card */}
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-gray-800 mb-2">Limits</h3>
            <p className="text-sm text-gray-500 mb-4">
              Set guardrails for booking frequency.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Minimum notice</label>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    defaultValue={2}
                    className="border rounded-lg px-2 py-1 w-16"
                  />
                  <select className="border rounded-lg px-2 py-1">
                    <option>hours</option>
                    <option>days</option>
                  </select>
                  <span className="text-sm">before event start</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Date range</label>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    defaultValue={2}
                    className="border rounded-lg px-2 py-1 w-16"
                  />
                  <select className="border rounded-lg px-2 py-1">
                    <option>months</option>
                    <option>weeks</option>
                  </select>
                  <span className="text-sm">into the future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsTab;

// import React, { useState } from "react";

// const Appointments = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   return (
//     <div className="p-6">
//       {!showDetails ? (
//         // Intro View
//         <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-4">Appointments</h2>
//           <p className="text-gray-600 mb-6">
//             Set up your appointment settings before proceeding.
//           </p>
//           <button
//             onClick={() => setShowDetails(true)}
//             className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//           >
//             Continue
//           </button>
//         </div>
//       ) : (
//         // Detailed UI View
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* Card 1 - Services */}
//           <div className="bg-white shadow-lg rounded-xl p-6">
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li>Consultation</li>
//               <li>Follow-up</li>
//               <li>Therapy Session</li>
//             </ul>
//           </div>

//           {/* Card 2 - Availability */}
//           <div className="bg-white shadow-lg rounded-xl p-6">
//             <h3 className="text-lg font-semibold mb-4">Availability</h3>
//             <p className="text-gray-600">Mon - Fri, 9 AM - 5 PM</p>
//           </div>

//           {/* Card 3 - Limits */}
//           <div className="bg-white shadow-lg rounded-xl p-6">
//             <h3 className="text-lg font-semibold mb-4">Limits</h3>
//             <p className="text-gray-600">Max 5 appointments per day</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Appointments;
