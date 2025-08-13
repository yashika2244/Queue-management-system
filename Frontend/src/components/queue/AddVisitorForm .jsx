// // import React, { useEffect, useState } from "react";
// // import { toast } from "react-toastify";
// // import { checkInCustomer } from "../../api/queueApi";
// // import { getAllBranches, getServicesByBranch } from "../../api/branchApi";

// // const AddVisitorForm = ({ onClose, onSuccess }) => {
// //   const [name, setName] = useState("");
// //   const [branchId, setBranchId] = useState("");
// //   const [serviceId, setServiceId] = useState("");
// //   const [branches, setBranches] = useState([]);
// //   const [services, setServices] = useState([]);

// //   useEffect(() => {
// //     fetchBranches();
// //   }, []);

// //   useEffect(() => {
// //     if (branchId) fetchServices(branchId);
// //   }, [branchId]);

// //   const fetchBranches = async () => {
// //     try {
// //       const res = await getAllBranches();
// //       setBranches(res);
// //       if (res.length === 1) setBranchId(res[0]._id);
// //     } catch (err) {
// //       toast.error("Failed to load branches");
// //     }
// //   };

// //   const fetchServices = async (id) => {
// //     try {
// //       const res = await getServicesByBranch(id);
// //       setServices(res);
// //     } catch (err) {
// //       toast.error("Failed to load services");
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!name || !branchId || !serviceId) {
// //       toast.error("Please fill all fields");
// //       return;
// //     }
// //     try {
// //       await checkInCustomer({ name, branchId, serviceId });
// //       toast.success("Visitor added successfully");
// //       onSuccess();
// //       onClose();
// //     } catch (err) {
// //       toast.error("Failed to add visitor");
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
// //       <div className="bg-white p-6 rounded-xl w-[400px]">
// //         <h2 className="text-lg font-semibold mb-4">Add Visitor</h2>
// //         <form className="space-y-4" onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             placeholder="Visitor Name"
// //             className="w-full border p-2 rounded-lg"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //           <select
// //             value={branchId}
// //             onChange={(e) => setBranchId(e.target.value)}
// //             className="w-full border p-2 rounded-lg"
// //           >
// //             <option value="">Select Branch</option>
// //             {branches.map((b) => (
// //               <option key={b._id} value={b._id}>
// //                 {b.name}
// //               </option>
// //             ))}
// //           </select>
// //           <select
// //             value={serviceId}
// //             onChange={(e) => setServiceId(e.target.value)}
// //             className="w-full border p-2 rounded-lg"
// //           >
// //             <option value="">Select Service</option>
// //             {services.map((s) => (
// //               <option key={s._id} value={s._id}>
// //                 {s.name}
// //               </option>
// //             ))}
// //           </select>
// //           <div className="flex justify-end gap-2">
// //             <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg">
// //               Cancel
// //             </button>
// //             <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg">
// //               Add
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddVisitorForm;
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { checkInCustomer } from "../../api/queueApi";
// import { getAllBranches, getServicesByBranch } from "../../api/branchApi";

// const AddVisitorForm = ({ onClose, onSuccess }) => {
//   const [name, setName] = useState("");
//   const [branchId, setBranchId] = useState("");
//   const [serviceId, setServiceId] = useState("");
//   const [branches, setBranches] = useState([]);
//   const [services, setServices] = useState([]);
//   const [loadingBranches, setLoadingBranches] = useState(false);
//   const [loadingServices, setLoadingServices] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   // Fetch branches on mount
//   useEffect(() => {
//     fetchBranches();
//   }, []);

//   // Fetch services when branch changes
//   useEffect(() => {
//     if (branchId) {
//       fetchServices(branchId);
//     } else {
//       setServices([]);
//     }
//   }, [branchId]);

//   const fetchBranches = async () => {
//     setLoadingBranches(true);
//     try {
//       const res = await getAllBranches();
//       setBranches(res);
//       if (res.length === 1) setBranchId(res[0]._id);
//     } catch (err) {
//       toast.error("Failed to load branches");
//     } finally {
//       setLoadingBranches(false);
//     }
//   };

//   const fetchServices = async (id) => {
//     setLoadingServices(true);
//     try {
//       const res = await getServicesByBranch(id);
//       setServices(res);
//     } catch (err) {
//       toast.error("Failed to load services");
//     } finally {
//       setLoadingServices(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name.trim() || !branchId || !serviceId) {
//       toast.error("Please fill all fields");
//       return;
//     }
//     setSubmitting(true);
//     try {
//       await checkInCustomer({ name: name.trim(), branchId, serviceId });
//       toast.success("Visitor added successfully");
//       onSuccess?.();
//       onClose?.();
//     } catch (err) {
//       toast.error("Failed to add visitor");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//       <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
//         <h2 className="text-lg font-semibold mb-4">Add Visitor</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Visitor Name */}
//           <input
//             type="text"
//             placeholder="Visitor Name"
//             className="w-full border p-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           {/* Branch Dropdown */}
//           <select
//             value={branchId}
//             onChange={(e) => setBranchId(e.target.value)}
//             className="w-full border p-2 rounded-lg"
//             disabled={loadingBranches}
//           >
//             <option value="">
//               {loadingBranches ? "Loading branches..." : "Select Branch"}
//             </option>
//             {branches.map((b) => (
//               <option key={b._id} value={b._id}>
//                 {b.name}
//               </option>
//             ))}
//           </select>

//           {/* Service Dropdown */}
//           <select
//             value={serviceId}
//             onChange={(e) => setServiceId(e.target.value)}
//             className="w-full border p-2 rounded-lg"
//             disabled={!branchId || loadingServices}
//           >
//             <option value="">
//               {loadingServices ? "Loading services..." : "Select Service"}
//             </option>
//             {services.map((s) => (
//               <option key={s._id} value={s._id}>
//                 {s.name}
//               </option>
//             ))}
//           </select>

//           {/* Buttons */}
//           <div className="flex justify-end gap-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border rounded-lg hover:bg-gray-100"
//               disabled={submitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50"
//               disabled={submitting}
//             >
//               {submitting ? "Adding..." : "Add"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddVisitorForm;
