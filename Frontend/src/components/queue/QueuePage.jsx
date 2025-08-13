// // src/pages/QueuePage.jsx
// import React, { useState, useEffect } from "react";
// import { checkInCustomer, getLiveQueue } from "../../api/queueApi";
// import { getAllBranches, getServicesByBranch } from "../../api/branchApi";

// const QueuePage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     branchId: "",
//     serviceId: ""
//   });

//   const [branches, setBranches] = useState([]);
//   const [services, setServices] = useState([]);
//   const [liveQueue, setLiveQueue] = useState([]);

//   // Load branches initially
//   useEffect(() => {
//     loadBranches();
//   }, []);

//   // Load services when branch changes
//   useEffect(() => {
//     if (formData.branchId) {
//       loadServices(formData.branchId);
//       loadQueue(formData.branchId);
//     }
//   }, [formData.branchId]);

//   const loadBranches = async () => {
//     const data = await getAllBranches();
//     setBranches(data);
//   };

//   const loadServices = async (branchId) => {
//     const data = await getServicesByBranch(branchId);
//     setServices(data);
//   };

//   const loadQueue = async (branchId) => {
//     const data = await getLiveQueue(branchId);
//     setLiveQueue(data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await checkInCustomer(formData);
//     setFormData({ name: "", phone: "", branchId: formData.branchId, serviceId: "" });
//     loadQueue(formData.branchId);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Add Visitor Form */}
//       <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto">
//         <h1 className="text-2xl font-bold mb-4 text-blue-600">Add Visitor</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <input
//             type="text"
//             placeholder="Visitor Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//           {/* Phone */}
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//             className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           {/* Branch Select */}
//           <select
//             value={formData.branchId}
//             onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
//             className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           >
//             <option value="">Select Branch</option>
//             {branches.map((b) => (
//               <option key={b._id} value={b._id}>
//                 {b.branchName}
//               </option>
//             ))}
//           </select>
//           {/* Service Select */}
//           <select
//             value={formData.serviceId}
//             onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
//             className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           >
//             <option value="">Select Service</option>
//             {services.map((s) => (
//               <option key={s._id} value={s._id}>
//                 {s.serviceName}
//               </option>
//             ))}
//           </select>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition"
//           >
//             Add to Queue
//           </button>
//         </form>
//       </div>

//       {/* Live Queue List */}
//       <div className="mt-8 max-w-2xl mx-auto">
//         <h2 className="text-xl font-bold text-gray-700 mb-4">Live Queue</h2>
//         {liveQueue.length === 0 ? (
//           <p className="text-gray-500 text-center">No visitors in queue</p>
//         ) : (
//           <div className="space-y-3">
//             {liveQueue.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center border-l-4 border-blue-500"
//               >
//                 <div>
//                   <p className="font-bold text-lg">{item.name}</p>
//                   <p className="text-sm text-gray-500">{item.phone || "No phone"}</p>
//                 </div>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     item.status === "waiting"
//                       ? "bg-yellow-100 text-yellow-700"
//                       : item.status === "serving"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {item.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QueuePage;


