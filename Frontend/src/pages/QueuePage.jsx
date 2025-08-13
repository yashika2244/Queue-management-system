// src/pages/QueuePage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import QueueManager from "../components/queue/QueueManager";


const QueuePage = () => {
  return (
<div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <QueueManager/>
      </main>
      </div>
    </div>
  );
};

export default QueuePage;
