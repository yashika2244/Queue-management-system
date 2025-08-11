// src/components/queue/LiveQueue.jsx
import React, { useEffect, useState } from "react";
import { getLiveQueue } from "@/api/queueApi";
import { Card, CardContent } from "@/components/ui/card";

const LiveQueue = () => {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQueue = async () => {
    try {
      const data = await getLiveQueue();
      setQueue(data);
    } catch (error) {
      console.error("Error fetching live queue", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {queue.map((entry) => (
        <Card key={entry._id} className="shadow">
          <CardContent className="p-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{entry.customerName}</h3>
              <span className="text-sm text-gray-500">#{entry.tokenNumber}</span>
            </div>
            <p className="text-sm">Service: {entry.serviceName}</p>
            <p className="text-sm">Status: <span className="text-blue-600 font-medium">{entry.status}</span></p>
            <p className="text-xs text-gray-500">Checked in at: {new Date(entry.createdAt).toLocaleTimeString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LiveQueue;
