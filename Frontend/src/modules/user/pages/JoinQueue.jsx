import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const JoinQueue = () => {
  const [service, setService] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  if (!user) {
    return <p className="text-center text-red-600 mt-10">Loading user...</p>;
  }

  const userId = user._id || user.id;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const joinQueue = async () => {
    if (!service) return alert("Please select a service");
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/token/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, service }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      alert("Failed to join queue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Join the Queue
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Select a service
        </label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-6"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">-- Choose a service --</option>
          <option value="Consultation">🩺 Consultation</option>
          <option value="Billing">💳 Billing</option>
          <option value="Haircut">💇 Haircut</option>
        </select>

        <button
          className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          onClick={joinQueue}
          disabled={loading}
        >
          {loading ? "Joining..." : "Join Queue"}
        </button>

        {response && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-center space-y-2">
            <p className="text-lg font-semibold text-blue-800">
              🎫 Token: {response.tokenNumber}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Status:</strong> {response.status}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Position in Queue:</strong> {response.position}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinQueue;
