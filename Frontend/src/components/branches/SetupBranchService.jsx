
// import React, { useEffect, useState } from "react";
// // import { getAllBranches, createBranch, createService } from "../api/setupApi";
// import { toast } from "react-toastify";
// import { addService, createBranch, getAllBranches } from "../../api/branchApi";

// const SetupBranchService = () => {
//   const [branches, setBranches] = useState([]);
//   const [selectedBranch, setSelectedBranch] = useState("");
//   const [branchName, setBranchName] = useState("");
//   const [serviceName, setServiceName] = useState("");

//   // Fetch branches when page loads
//   useEffect(() => {
//     fetchBranches();
//   }, []);

//   const fetchBranches = async () => {
//     try {
//       const res = await getAllBranches();
//       setBranches(res);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load branches");
//     }
//   };

//   // Add branch
//   const handleAddBranch = async (e) => {
//     e.preventDefault();
//     if (!branchName.trim()) return toast.warning("Enter branch name");
//     try {
//       await createBranch({ name: branchName });
//       toast.success("Branch added");
//       setBranchName("");
//       fetchBranches();
//     } catch (err) {
//       console.error(err);
//       toast.error("Error adding branch");
//     }
//   };

//   // Add service to selected branch
//   const handleAddService = async (e) => {
//     e.preventDefault();
//     if (!selectedBranch) return toast.warning("Select a branch");
//     if (!serviceName.trim()) return toast.warning("Enter service name");
//     try {
//       await addService({ branchId: selectedBranch, name: serviceName });
//       toast.success("Service added");
//       setServiceName("");
//     } catch (err) {
//       console.error(err);
//       toast.error("Error adding service");
//     }
//   };

//   // Cancel button
//   const handleCancel = () => {
//     setSelectedBranch("");
//     setBranchName("");
//     setServiceName("");
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
//       <h2 className="text-xl font-semibold">Setup Branch & Services</h2>

//       {/* Add Branch */}
//       <form onSubmit={handleAddBranch} className="space-y-3">
//         <h3 className="font-medium">Add Branch</h3>
//         <input
//           type="text"
//           placeholder="Branch name"
//           value={branchName}
//           onChange={(e) => setBranchName(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-emerald-600 text-white rounded-lg py-2 hover:bg-emerald-700"
//         >
//           Add Branch
//         </button>
//       </form>

//       {/* Add Service */}
//       <form onSubmit={handleAddService} className="space-y-3">
//         <h3 className="font-medium">Add Service</h3>
//         <select
//           value={selectedBranch}
//           onChange={(e) => setSelectedBranch(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//         >
//           <option value="">Select branch</option>
//           {branches.map((branch) => (
//             <option key={branch._id} value={branch._id}>
//               {branch.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Service name"
//           value={serviceName}
//           onChange={(e) => setServiceName(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//         />
//         <div className="flex gap-3">
//           <button
//             type="submit"
//             className="flex-1 bg-emerald-600 text-white rounded-lg py-2 hover:bg-emerald-700"
//           >
//             Add Service
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="flex-1 bg-gray-200 rounded-lg py-2 hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SetupBranchService;

import React, { useState, useEffect } from "react";
import { addService, createBranch, getAllBranches ,getServicesByBranch} from "../../api/branchApi";

import { toast } from "react-toastify";

const SetupBranchService = () => {
  const [branches, setBranches] = useState([]);
  const [services, setServices] = useState([]);
  const [branchName, setBranchName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  // Fetch branches on load
  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = async () => {
    try {
      const data = await getAllBranches();
      setBranches(data);
    } catch (error) {
      toast.error("Error fetching branches");
    }
  };

  const handleAddBranch = async () => {
    if (!branchName) return toast.warn("Enter branch name");
    try {
      await createBranch({ name: branchName });
      toast.success("Branch added successfully");
      setBranchName("");
      fetchBranches();
    } catch (error) {
      toast.error("Error adding branch");
    }
  };

  const handleAddService = async () => {
    if (!selectedBranch) return toast.warn("Select branch");
    if (!serviceName) return toast.warn("Enter service name");
    try {
      await addService({ branchId: selectedBranch, name: serviceName });
      toast.success("Service added successfully");
      setServiceName("");
      if (selectedBranch) fetchServices(selectedBranch);
    } catch (error) {
      toast.error("Error adding service");
    }
  };

  const fetchServices = async (branchId) => {
    try {
      const data = await getServicesByBranch(branchId);
      setServices(data);
    } catch (error) {
      toast.error("Error fetching services");
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Branch Form */}
      <div className="space-y-4 border p-4 rounded-md">
        <h2 className="font-bold text-lg">Add Branch</h2>
        <input
          type="text"
          value={branchName}
          onChange={(e) => setBranchName(e.target.value)}
          placeholder="Branch Name"
          className="border p-2 rounded w-full"
        />
        <div className="flex gap-2">
          <button
            onClick={handleAddBranch}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
          <button
            onClick={() => setBranchName("")}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Service Form */}
      <div className="space-y-4 border p-4 rounded-md">
        <h2 className="font-bold text-lg">Add Service</h2>
        <select
          value={selectedBranch}
          onChange={(e) => {
            setSelectedBranch(e.target.value);
            fetchServices(e.target.value);
          }}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Branch</option>
          {branches.map((b) => (
            <option key={b._id} value={b._id}>
              {b.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          placeholder="Service Name"
          className="border p-2 rounded w-full"
        />
        <div className="flex gap-2">
          <button
            onClick={handleAddService}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
          <button
            onClick={() => setServiceName("")}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Services List */}
      {services.length > 0 && (
        <div className="border p-4 rounded-md">
          <h3 className="font-semibold mb-2">Services in Branch</h3>
          <ul className="list-disc list-inside">
            {services.map((s) => (
              <li key={s._id}>{s.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SetupBranchService;
