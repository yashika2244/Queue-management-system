// src/components/analytics/AnalyticsOverview.jsx
import React, { useEffect, useState } from "react";
import { getOverallAnalytics } from "../../api/analyticsApi";

const AnalyticsOverview = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await getOverallAnalytics();
        setData(res);
      } catch (error) {
        console.error("Error fetching analytics", error);
      }
    };
    fetchAnalytics();
  }, []);

  if (!data) return <p className="p-6">Loading analytics...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Analytics Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-600">Total Visitors</p>
          <p className="text-2xl font-bold">{data.totalVisitors}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-600">Total Appointments</p>
          <p className="text-2xl font-bold">{data.totalAppointments}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-600">Avg Wait Time</p>
          <p className="text-2xl font-bold">{data.avgWaitTime} min</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-600">Feedback Score</p>
          <p className="text-2xl font-bold">{data.feedbackScore}/5</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
