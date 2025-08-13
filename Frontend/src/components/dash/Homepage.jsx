import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getQueueAnalytics } from "../../api/analyticsApi";
import { Plus, Users, Briefcase, CheckCircle } from "lucide-react";

const HomePage = () => {
  const [stats, setStats] = useState({ waiting: 0, clerks: 0, served: 0 });

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const data = await getQueueAnalytics();
      setStats({
        waiting: data.visitorsWaiting || 0,
        clerks: data.clerksActive || 0,
        served: data.visitorsServed || 0,
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to load dashboard stats");
    }
  };

  const statCards = [
    {
      label: "Visitors Waiting",
      value: stats.waiting,
      icon: <Users className="text-emerald-600" size={28} />,
      color: "emerald",
      desc: `${stats.waiting} visitors currently in queue`,
    },
    {
      label: "Clerks Busy",
      value: stats.clerks,
      icon: <Briefcase className="text-blue-600" size={28} />,
      color: "blue",
      desc: `${stats.clerks} clerks serving visitors`,
    },
    {
      label: "Visitors Served",
      value: stats.served,
      icon: <CheckCircle className="text-green-600" size={28} />,
      color: "green",
      desc: `${stats.served} visitors served today`,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen py-8">
      {/* Top Banner */}
      <div className="bg-purple-50 border border-purple-200 px-4 py-2 rounded-md text-sm text-gray-700 mb-6 flex justify-between items-center shadow-sm">
        <span>
          <strong className="text-purple-700">DEMO LOCATION</strong> — Seeing
          sample data. When you’re ready, create your own location.
        </span>
        <button
          onClick={() => toast.info("Add Location clicked")}
          className="text-purple-700 font-medium hover:underline"
        >
          ADD LOCATION
        </button>
      </div>

      {/* Header & Tabs */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Overview</h1>
        <div className="flex gap-6 border-b border-gray-200">
          {["Today", "Daily Report", "Weekly Report"].map((tab, i) => (
            <button
              key={i}
              className={`pb-2 text-sm font-medium transition ${
                i === 0
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-emerald-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <div
            key={i}
            className={`bg-white rounded-lg shadow hover:shadow-md transition p-6 border-t-4 border-${stat.color}-500`}
          >
            <div className="flex items-center gap-3">
              {stat.icon}
              <div>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="text-4xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Visitors Waiting */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-4 text-gray-800">Visitors Waiting</h2>
          <ul className="divide-y divide-gray-100">
            {[
              {
                name: "Sophia Murphy",
                status: "in Consultation - Assigned to Carlos",
                time: "3h 14m",
              },
              { name: "Jackson Lee", status: "in Support", time: "3h 13m" },
            ].map((v, i) => (
              <li
                key={i}
                className="flex justify-between items-center py-2 hover:bg-gray-50 px-2 rounded"
              >
                <div>
                  <p className="font-medium">{v.name}</p>
                  <p className="text-xs text-gray-500">{v.status}</p>
                </div>
                <span className="text-xs text-gray-400">{v.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desks */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-4 text-gray-800">Desks</h2>
          <div className="space-y-3">
            {["Desk 1", "Desk 2", "Desk 3"].map((desk, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 text-center text-gray-500 hover:bg-gray-50 transition"
              >
                {desk} — Desk is available
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-semibold mb-4 text-gray-800">Services</h2>
          <div className="space-y-4 text-sm">
            {[
              {
                name: "Consultation",
                visitors: "125 + 61",
                wait: "7min",
                service: "10min",
              },
              {
                name: "Information",
                visitors: "120 + 56",
                wait: "10min",
                service: "12min",
              },
              {
                name: "Support",
                visitors: "3",
                wait: "1min",
                service: "10min",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="flex justify-between items-center hover:bg-gray-50 p-2 rounded transition"
              >
                <span className="font-medium">{service.name}</span>
                <div className="flex gap-6 text-gray-500 text-xs">
                  <span>Visitors: {service.visitors}</span>
                  <span>Avg Wait: {service.wait}</span>
                  <span>Avg Service: {service.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
