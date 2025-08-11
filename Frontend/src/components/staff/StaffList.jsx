// src/components/staff/StaffList.jsx
import React, { useEffect, useState } from "react";
import { deleteStaff, getAllStaff } from "../../api/staffApi";

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStaff = async () => {
    const data = await getAllStaff();
    setStaffList(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) return;
    await deleteStaff(id);
    fetchStaff();
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  if (loading) return <p className="text-center">Loading staff...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Staff Members</h2>
      {staffList.length === 0 ? (
        <p>No staff found.</p>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Role</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((staff) => (
                <tr key={staff._id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{staff.name}</td>
                  <td className="p-3 border-b">{staff.email}</td>
                  <td className="p-3 border-b capitalize">{staff.role}</td>
                  <td className="p-3 border-b">
                    <button
                      onClick={() => handleDelete(staff._id)}
                      className="text-red-600 hover:underline"
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

export default StaffList;
