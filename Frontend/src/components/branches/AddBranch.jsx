// src/components/branches/AddBranch.jsx
import React, { useState } from "react";
import { createBranch } from "../../api/setupApi";

const AddBranch = () => {
  const [branchName, setBranchName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleAddBranch = async (e) => {
    e.preventDefault();
    if (!branchName || !location) return;

    try {
      await createBranch({ name: branchName, location });
      setMessage("Branch created successfully!");
      setBranchName("");
      setLocation("");
    } catch (error) {
      setMessage("Failed to create branch.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Branch</h2>
      {message && <p className="mb-4 text-blue-500">{message}</p>}
      <form onSubmit={handleAddBranch} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Branch Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Branch
        </button>
      </form>
    </div>
  );
};

export default AddBranch;
