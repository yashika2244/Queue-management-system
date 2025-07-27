import React, { useEffect, useState } from 'react';

const QueueStatus = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchStatus = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/token/status/${userId}`);
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      setStatus(null);
    } finally {
      setLoading(false);
    }
  };

  const leaveQueue = async () => {
    const confirm = window.confirm('Are you sure you want to leave the queue?');
    if (!confirm) return;

    try {
      await fetch(`${baseUrl}/api/token/leave/${userId}`, {
        method: 'DELETE'
      });
      alert('You’ve left the queue.');
      setStatus(null);
    } catch (err) {
      alert('Failed to leave queue.');
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000); // Auto refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="text-center mt-10">Loading status...</p>;

  if (!status)
    return <p className="text-center mt-10 text-gray-500">You are not in the queue.</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Your Queue Status</h2>
      <p><strong>Token Number:</strong> {status.tokenNumber}</p>
      <p><strong>Status:</strong> {status.status}</p>
      <p><strong>Your Position:</strong> {status.position}</p>
      <button
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={leaveQueue}
      >
        Leave Queue
      </button>
    </div>
  );
};

export default QueueStatus;
