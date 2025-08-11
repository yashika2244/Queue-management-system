// src/components/staff/RegisterStaff.jsx
import React, { useState } from "react";
import { registerStaff } from "../../api/staffApi";

const RegisterStaff = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "staff" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setError("");

    try {
      await registerStaff(form);
      setSuccessMsg("Staff registered successfully!");
      setForm({ name: "", email: "", password: "", role: "staff" });
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register New Staff</h2>

      {successMsg && <p className="text-green-600 mb-3">{successMsg}</p>}
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          className="w-full px-4 py-2 border rounded"
          value={form.role}
          onChange={handleChange}
        >
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterStaff;
