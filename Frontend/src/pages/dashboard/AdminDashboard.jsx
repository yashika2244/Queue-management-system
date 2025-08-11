import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QueueTable from "../components/QueueTable";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    fetchQueues();
  }, []);

  const fetchQueues = async () => {
    const { data } = await axios.get("/api/queue", {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setQueues(data);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome, {user.firstName}</h1>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Live Queues</h2>
          <QueueTable queues={queues} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
