// src/components/analytics/OverallAnalytics.jsx
import React, { useEffect, useState } from "react";
import { getOverallAnalytics } from "../../api/analyticsApi";

const OverallAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await getOverallAnalytics();
        setData(res);
      } catch (err) {
        console.error("Failed to fetch overall analytics", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <p className="text-center p-4">Loading analytics...</p>;

  if (!data) return <p className="text-center p-4 text-red-600">Failed to load data.</p>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Overall Analytics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded bg-blue-50">
          <p className="text-sm text-gray-500">Total Queues</p>
          <p className="text-xl font-semibold">{data.totalQueues}</p>
        </div>
        <div className="p-4 border rounded bg-green-50">
          <p className="text-sm text-gray-500">Appointments Booked</p>
          <p className="text-xl font-semibold">{data.totalAppointments}</p>
        </div>
        <div className="p-4 border rounded bg-yellow-50">
          <p className="text-sm text-gray-500">Total Feedback</p>
          <p className="text-xl font-semibold">{data.totalFeedbacks}</p>
        </div>
        <div className="p-4 border rounded bg-purple-50">
          <p className="text-sm text-gray-500">Total Staff</p>
          <p className="text-xl font-semibold">{data.totalStaff}</p>
        </div>
        <div className="p-4 border rounded bg-red-50">
          <p className="text-sm text-gray-500">Total Visitors Served</p>
          <p className="text-xl font-semibold">{data.totalServed}</p>
        </div>
      </div>
    </div>
  );
};

export default OverallAnalytics;
