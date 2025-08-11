// src/pages/QueuePage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import QueueManager from "../components/queue/QueueManager";


const QueuePage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <QueueManager/>
      </div>
    </div>
  );
};

export default QueuePage;
