// src/components/queue/CreateQueue.jsx
import React, { useState, useEffect } from "react";
import { createQueue } from "@/api/queueApi";
import { getBranchesAndServices } from "@/api/setupApi";
import { toast } from "react-toastify";

const CreateQueue = () => {
  const [customerName, setCustomerName] = useState("");
  const [branchId, setBranchId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [branches, setBranches] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { branches, services } = await getBranchesAndServices();
        setBranches(branches);
        setServices(services);
      } catch (err) {
        toast.error("Failed to load branches and services");
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !branchId || !serviceId) return toast.error("All fields are required");

    try {
      await createQueue({ customerName, branchId, serviceId });
      toast.success("Customer added to queue");
      setCustomerName("");
      setBranchId("");
      setServiceId("");
    } catch (error) {
      toast.error("Failed to add to queue");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto space-y-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add to Queue</h2>

      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Customer Name"
        className="w-full border px-4 py-2 rounded"
      />

      <select value={branchId} onChange={(e) => setBranchId(e.target.value)} className="w-full border px-4 py-2 rounded">
        <option value="">Select Branch</option>
        {branches.map((b) => (
          <option key={b._id} value={b._id}>
            {b.name}
          </option>
        ))}
      </select>

      <select value={serviceId} onChange={(e) => setServiceId(e.target.value)} className="w-full border px-4 py-2 rounded">
        <option value="">Select Service</option>
        {services.map((s) => (
          <option key={s._id} value={s._id}>
            {s.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Add to Queue
      </button>
    </form>
  );
};

export default CreateQueue;
