// src/components/appointment/AppointmentList.jsx
import React, { useEffect, useState } from "react";
import { getAppointments, cancelAppointment } from "../../api/appointmentApi";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    const data = await getAppointments();
    setAppointments(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    const confirmed = window.confirm("Are you sure you want to cancel?");
    if (!confirmed) return;
    await cancelAppointment(id);
    fetchAppointments();
  };

  if (loading) return <p className="text-center">Loading appointments...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="bg-white shadow rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Phone</th>
                <th className="p-3 border-b">Branch</th>
                <th className="p-3 border-b">Service</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt._id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{appt.name}</td>
                  <td className="p-3 border-b">{appt.phone}</td>
                  <td className="p-3 border-b">{appt.branch?.name || "-"}</td>
                  <td className="p-3 border-b">{appt.service?.name || "-"}</td>
                  <td className="p-3 border-b capitalize">{appt.status}</td>
                  <td className="p-3 border-b">
                    {appt.status !== "cancelled" && (
                      <button
                        onClick={() => handleCancel(appt._id)}
                        className="text-red-600 hover:underline"
                      >
                        Cancel
                      </button>
                    )}
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

export default AppointmentList;
