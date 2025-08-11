import React, { useEffect, useState } from "react";
import { getAllFeedback } from "../../api/feedbackApi";

const FeedbackBoard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const data = await getAllFeedback();
        setFeedbacks(data);
      } catch (error) {
        console.error("Failed to fetch feedbacks", error);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Customer Feedback</h2>
      <div className="grid gap-4">
        {feedbacks.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-700">"{item.message}"</p>
            <p className="text-xs text-gray-500 mt-2">From: {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackBoard;
