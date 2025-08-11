// src/components/branches/AddService.jsx
import React, { useState, useEffect } from "react";
import { createService, getBranches } from "../../api/setupApi";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [branchId, setBranchId] = useState("");
  const [branches, setBranches] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const data = await getBranches();
        setBranches(data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };
    fetchBranches();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    if (!serviceName || !branchId) return;

    try {
      await createService({ name: serviceName, branchId });
      setMessage("Service added successfully!");
      setServiceName("");
      setBranchId("");
    } catch (error) {
      setMessage("Failed to add service.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleAddService} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Service Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Select Branch</label>
          <select
            className="w-full border p-2 rounded"
            value={branchId}
            onChange={(e) => setBranchId(e.target.value)}
            required
          >
            <option value="">-- Select Branch --</option>
            {branches.map((branch) => (
              <option key={branch._id} value={branch._id}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
