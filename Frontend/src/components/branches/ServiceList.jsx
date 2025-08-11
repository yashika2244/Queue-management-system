// src/components/branches/ServiceList.jsx
import React, { useEffect, useState } from "react";
import { getServices, deleteService } from "../../api/setupApi";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      setServices(services.filter((s) => s._id !== id));
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">All Services</h2>
      <ul className="divide-y">
        {services.map((service) => (
          <li key={service._id} className="py-2 flex justify-between items-center">
            <div>
              <p className="font-semibold">{service.name}</p>
              <p className="text-sm text-gray-600">Branch: {service.branch?.name || "N/A"}</p>
            </div>
            <button
              onClick={() => handleDelete(service._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
