
// // // import React from "react";
// // // import { CalendarDays, Users, Activity, Layers } from "lucide-react";

// // // const statCards = [
// // //   {
// // //     title: "Total Branches",
// // //     value: 8,
// // //     icon: <Layers className="w-6 h-6 text-white" />,
// // //     bg: "bg-indigo-600",
// // //   },
// // //   {
// // //     title: "Today's Appointments",
// // //     value: 42,
// // //     icon: <CalendarDays className="w-6 h-6 text-white" />,
// // //     bg: "bg-blue-600",
// // //   },
// // //   {
// // //     title: "Live Queues",
// // //     value: 5,
// // //     icon: <Activity className="w-6 h-6 text-white" />,
// // //     bg: "bg-emerald-600",
// // //   },
// // //   {
// // //     title: "Staff Online",
// // //     value: 12,
// // //     icon: <Users className="w-6 h-6 text-white" />,
// // //     bg: "bg-teal-600",
// // //   },
// // // ];

// // // const DashboardHome = () => {
// // //   return (
// // //     <div className="p-6 space-y-6">
// // //       <div>
// // //         <h1 className="text-2xl font-bold text-gray-800">Welcome to QueuePilot</h1>
// // //         <p className="text-gray-600">Here’s what’s happening today 👇</p>
// // //       </div>

// // //       {/* Stats Cards */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {statCards.map((card, idx) => (
// // //           <div
// // //             key={idx}
// // //             className={`flex items-center justify-between p-4 rounded-xl shadow-md text-white ${card.bg}`}
// // //           >
// // //             <div>
// // //               <h3 className="text-sm font-medium">{card.title}</h3>
// // //               <p className="text-2xl font-bold">{card.value}</p>
// // //             </div>
// // //             <div className="p-2 bg-white/20 rounded-full">
// // //               {card.icon}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Upcoming Appointments (Placeholder) */}
// // //       <div className="bg-white p-6 rounded-xl shadow-md">
// // //         <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
// // //         <p className="text-gray-500">No upcoming appointments yet.</p>
// // //         {/* You can map over appointment data here */}
// // //       </div>

// // //       {/* Live Queue Summary (Placeholder) */}
// // //       <div className="bg-white p-6 rounded-xl shadow-md">
// // //         <h2 className="text-lg font-semibold mb-4">Live Queues</h2>
// // //         <p className="text-gray-500">All queues are currently stable.</p>
// // //         {/* You can show queue cards or summary charts here */}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DashboardHome;


// // import React, { useEffect, useState } from "react";
// // import { CalendarDays, Users, Activity, Layers } from "lucide-react";

// // const DashboardHome = () => {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const fetchDashboardData = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const headers = { Authorization: `Bearer ${token}` };

// //       // Parallel API calls
// //       const [branchesRes, appointmentsRes, queuesRes, staffRes, queueAnalyticsRes] = await Promise.all([
// //         fetch("http://localhost:8000/api/setupBranches/branches", { headers }),
// //         fetch("http://localhost:8000/api/appointments", { headers }),
// //         fetch("http://localhost:8000/api/queue", { headers }),
// //         fetch("http://localhost:8000/api/analytics/staff", { headers }),
// //         fetch("http://localhost:8000/api/analytics/queue", { headers }),
// //       ]);

// //       const branches = await branchesRes.json();
// //       const appointments = await appointmentsRes.json();
// //       const queues = await queuesRes.json();
// //       const staff = await staffRes.json();
// //       const queueAnalytics = await queueAnalyticsRes.json();

// //       // Filter today's appointments
// //       const today = new Date().toDateString();
// //       const todayAppointments = appointments.filter(
// //         (a) => new Date(a.date).toDateString() === today
// //       );

// //       // Filter upcoming appointments
// //       const upcomingAppointments = appointments
// //         .filter((a) => new Date(a.date) > new Date())
// //         .sort((a, b) => new Date(a.date) - new Date(b.date))
// //         .slice(0, 5);

// //       setData({
// //         totalBranches: branches.length,
// //         todayAppointments: todayAppointments.length,
// //         liveQueues: queues.length,
// //         staffOnline: staff.filter((s) => s.status === "online").length,
// //         upcomingAppointments,
// //         queueSummary: queueAnalytics.summary || "All queues are currently stable.",
// //       });
// //     } catch (error) {
// //       console.error("Error fetching dashboard data:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchDashboardData(); // Initial fetch
// //     const interval = setInterval(fetchDashboardData, 15000); // Auto-refresh every 15 sec
// //     return () => clearInterval(interval);
// //   }, []);

// //   if (loading) {
// //     return <div className="p-6">Loading dashboard...</div>;
// //   }

// //   if (!data) {
// //     return <div className="p-6 text-red-500">Failed to load dashboard data.</div>;
// //   }

// //   const statCards = [
// //     {
// //       title: "Total Branches",
// //       value: data.totalBranches,
// //       icon: <Layers className="w-6 h-6 text-white" />,
// //       bg: "bg-indigo-600",
// //     },
// //     {
// //       title: "Today's Appointments",
// //       value: data.todayAppointments,
// //       icon: <CalendarDays className="w-6 h-6 text-white" />,
// //       bg: "bg-blue-600",
// //     },
// //     {
// //       title: "Live Queues",
// //       value: data.liveQueues,
// //       icon: <Activity className="w-6 h-6 text-white" />,
// //       bg: "bg-emerald-600",
// //     },
// //     {
// //       title: "Staff Online",
// //       value: data.staffOnline,
// //       icon: <Users className="w-6 h-6 text-white" />,
// //       bg: "bg-teal-600",
// //     },
// //   ];

// //   return (
// //     <div className="p-6 space-y-6">
// //       <div>
// //         <h1 className="text-2xl font-bold text-gray-800">Welcome to QueuePilot</h1>
// //         <p className="text-gray-600">Here’s what’s happening today 👇</p>
// //       </div>

// //       {/* Stats Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {statCards.map((card, idx) => (
// //           <div
// //             key={idx}
// //             className={`flex items-center justify-between p-4 rounded-xl shadow-md text-white ${card.bg}`}
// //           >
// //             <div>
// //               <h3 className="text-sm font-medium">{card.title}</h3>
// //               <p className="text-2xl font-bold">{card.value}</p>
// //             </div>
// //             <div className="p-2 bg-white/20 rounded-full">{card.icon}</div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Upcoming Appointments */}
// //       <div className="bg-white p-6 rounded-xl shadow-md">
// //         <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
// //         {data.upcomingAppointments.length > 0 ? (
// //           <ul className="divide-y divide-gray-200">
// //             {data.upcomingAppointments.map((appt, idx) => (
// //               <li key={idx} className="py-2 flex justify-between">
// //                 <span className="font-medium">{appt.name || "Unnamed"}</span>
// //                 <span className="text-gray-500">
// //                   {new Date(appt.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
// //                 </span>
// //                 <span className="text-gray-400">{appt.branch || "-"}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-gray-500">No upcoming appointments yet.</p>
// //         )}
// //       </div>

// //       {/* Live Queue Summary */}
// //       <div className="bg-white p-6 rounded-xl shadow-md">
// //         <h2 className="text-lg font-semibold mb-4">Live Queues</h2>
// //         <p className="text-gray-500">{data.queueSummary}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardHome; 
// import React from "react";
// import { Users, UserCheck, UserMinus } from "lucide-react";
// import { motion } from "framer-motion";

// const DashboardHome = ({ stats = { waiting: 0, clerks: 0, served: 0 } }) => {
//   const cards = [
//     {
//       title: "Visitors Waiting",
//       value: stats.waiting,
//       icon: <Users size={28} className="text-yellow-600" />,
//       bg: "bg-yellow-50",
//     },
//     {
//       title: "Clerks Active",
//       value: stats.clerks,
//       icon: <UserCheck size={28} className="text-emerald-600" />,
//       bg: "bg-emerald-50",
//     },
//     {
//       title: "Visitors Served",
//       value: stats.served,
//       icon: <UserMinus size={28} className="text-blue-600" />,
//       bg: "bg-blue-50",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {cards.map((card, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: idx * 0.1 }}
//           className={`flex items-center gap-4 p-6 rounded-2xl shadow-sm border ${card.bg}`}
//         >
//           <div className="p-3 rounded-xl bg-white shadow-sm">{card.icon}</div>
//           <div>
//             <p className="text-sm font-medium text-gray-500">{card.title}</p>
//             <h2 className="text-2xl font-bold text-gray-800">{card.value}</h2>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default DashboardHome;
