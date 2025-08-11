import React, { useEffect, useState } from "react";
import { getAllStaff, deleteStaff } from "../../api/staffApi";

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStaff = async () => {
    try {
      const data = await getAllStaff();
      setStaffList(data);
    } catch (err) {
      console.error("Failed to fetch staff:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this staff?");
    if (!confirmDelete) return;

    try {
      await deleteStaff(id);
      setStaffList((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting staff:", err);
      alert("Failed to delete staff.");
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Staff Management</h2>

      {loading ? (
        <p>Loading staff...</p>
      ) : staffList.length === 0 ? (
        <p className="text-gray-500">No staff found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded bg-white">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">#</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff, index) => (
                <tr key={staff._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{staff.name}</td>
                  <td className="p-3 border">{staff.email}</td>
                  <td className="p-3 border capitalize">{staff.role}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(staff._id)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;
