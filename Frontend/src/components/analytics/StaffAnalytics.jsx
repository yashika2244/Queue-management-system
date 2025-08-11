// src/components/analytics/StaffAnalytics.jsx
import React, { useEffect, useState } from "react";
import { getStaffAnalytics } from "../../api/analyticsApi";

const StaffAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffAnalytics = async () => {
      try {
        const res = await getStaffAnalytics();
        setAnalytics(res);
      } catch (err) {
        console.error("Failed to fetch staff analytics", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStaffAnalytics();
  }, []);

  if (loading) return <p className="text-center p-4">Loading staff analytics...</p>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Staff Performance</h2>
      <div className="space-y-4">
        {analytics.length > 0 ? (
          analytics.map((staff, idx) => (
            <div key={idx} className="p-4 border rounded bg-gray-50">
              <p className="text-lg font-semibold">{staff.staffName}</p>
              <div className="text-sm text-gray-600">
                <p>Queues Served: {staff.totalServed}</p>
                <p>Average Service Time: {staff.avgServiceTime} min</p>
              </div>
            </div>
          ))
        ) : (
          <p>No staff analytics available.</p>
        )}
      </div>
    </div>
  );
};

export default StaffAnalytics;
