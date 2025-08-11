// src/pages/FeedbackPage.jsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Header";
import FeedbackBoard from "../components/feedback/FeedbackBoard";


const FeedbackPage = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1">
        <Navbar/>
        <FeedbackBoard/>
      </div>
    </div>
  );
};

export default FeedbackPage;
