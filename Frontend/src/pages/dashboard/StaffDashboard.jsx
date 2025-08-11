
// import Sidebar from "../../components/layout/Sidebar.jsx"
// import QueueTable from "../../components/QueueTable.js";
// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// const StaffDashboard = () => {
//   const { user } = useContext(useAuth)
//   const [queues, setQueues] = useState([]);

//   useEffect(() => {
//     fetchQueues();
//   }, []);

//   const fetchQueues = async () => {
//     const { data } = await axios.get("/api/queue", {
//       headers: { Authorization: `Bearer ${user.token}` },
//     });
//     setQueues(data);
//   };

//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 bg-gray-50 p-6">
//         <h1 className="text-2xl font-bold mb-4">Staff Dashboard</h1>
//         <QueueTable queues={queues} />
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getQueue, callNext, serveTicket, cancelTicket } from "../api/queue";
import toast from "react-hot-toast";

const StaffDashboardPage = () => {
  const { authData } = useContext(AuthContext);
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQueue = async () => {
    try {
      setLoading(true);
      const data = await getQueue(authData.token);
      setQueue(data);
    } catch (err) {
      toast.error("Failed to load queue");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
    const interval = setInterval(fetchQueue, 5000); // auto refresh
    return () => clearInterval(interval);
  }, []);

  const handleCallNext = async () => {
    try {
      const res = await callNext(authData.token);
      toast.success(`Called ticket #${res.ticket.ticketNumber}`);
      fetchQueue();
    } catch (err) {
      toast.error(err.response?.data?.message || "No one in queue");
    }
  };

  const handleServe = async (queueId, ticketNumber) => {
    try {
      await serveTicket(queueId, ticketNumber, authData.token);
      toast.success("Ticket marked served");
      fetchQueue();
    } catch {
      toast.error("Serve failed");
    }
  };

  const handleCancel = async (queueId, ticketNumber) => {
    try {
      await cancelTicket(queueId, ticketNumber, authData.token);
      toast.success("Ticket cancelled");
      fetchQueue();
    } catch {
      toast.error("Cancel failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome, {authData?.staff?.name}
      </h2>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Live Queue</h3>
        <button
          onClick={handleCallNext}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Call Next
        </button>
      </div>

      {loading ? (
        <p>Loading queue...</p>
      ) : (
        <div className="space-y-4">
          {queue.length === 0 ? (
            <p className="text-gray-500">No one in queue.</p>
          ) : (
            queue.map((item) => (
              <div
                key={item.ticketNumber}
                className="flex justify-between items-center bg-white p-4 rounded-md shadow"
              >
                <div>
                  <p className="font-semibold text-lg">
                    #{item.ticketNumber} - {item.name}
                  </p>
                  <p className="text-sm text-gray-600">{item.service}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleServe(item.queueId, item.ticketNumber)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Serve
                  </button>
                  <button
                    onClick={() => handleCancel(item.queueId, item.ticketNumber)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default StaffDashboardPage;
