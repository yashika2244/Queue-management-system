// src/components/appointment/BookAppointment.jsx
import React, { useState, useEffect } from "react";
import { bookAppointment, getBranches, getServices } from "../../api/appointmentApi";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branchId: "",
    serviceId: "",
  });

  const [branches, setBranches] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const branchData = await getBranches();
      const serviceData = await getServices();
      setBranches(branchData);
      setServices(serviceData);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await bookAppointment(formData);
    if (res.success) {
      setSuccessMsg("Appointment booked successfully!");
      setFormData({ name: "", phone: "", branchId: "", serviceId: "" });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Full Name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="branchId"
          className="border p-2 rounded"
          value={formData.branchId}
          onChange={handleChange}
          required
        >
          <option value="">Select Branch</option>
          {branches.map((b) => (
            <option key={b._id} value={b._id}>
              {b.name}
            </option>
          ))}
        </select>
        <select
          name="serviceId"
          className="border p-2 rounded"
          value={formData.serviceId}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          {services.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
      {successMsg && <p className="text-green-600 mt-3">{successMsg}</p>}
    </div>
  );
};

export default BookAppointment;
