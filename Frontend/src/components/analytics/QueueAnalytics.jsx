// src/components/analytics/QueueAnalytics.jsx
import React, { useEffect, useState } from "react";
import { getQueueAnalytics } from "../../api/analyticsApi";

const QueueAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQueueAnalytics = async () => {
      try {
        const res = await getQueueAnalytics();
        setAnalytics(res);
      } catch (err) {
        console.error("Failed to fetch queue analytics", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQueueAnalytics();
  }, []);

  if (loading) return <p className="text-center p-4">Loading queue analytics...</p>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Queue Analytics</h2>
      <div className="space-y-4">
        {analytics.length > 0 ? (
          analytics.map((item, index) => (
            <div key={index} className="p-4 border rounded bg-gray-50">
              <p className="text-lg font-semibold">{item.serviceName}</p>
              <div className="text-sm text-gray-600">
                <p>Checked In: {item.totalCheckedIn}</p>
                <p>Served: {item.totalServed}</p>
                <p>Cancelled: {item.totalCancelled}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No queue analytics available.</p>
        )}
      </div>
    </div>
  );
};

export default QueueAnalytics;
