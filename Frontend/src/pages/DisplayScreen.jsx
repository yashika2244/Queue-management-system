// src/components/display/DisplayScreen.jsx
import React, { useEffect, useState } from "react";
import { getDisplayData } from "../api/queueApi";


const DisplayScreen = ({ branchId }) => {
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const fetchDisplay = async () => {
      try {
        const data = await getDisplayData(branchId);
        setDisplayData(data);
      } catch (error) {
        console.error("Error loading display:", error);
      }
    };

    fetchDisplay();
  }, [branchId]);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Now Serving</h1>
      {displayData.length > 0 ? (
        displayData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-xl w-full max-w-2xl mb-4 p-6 flex justify-between text-2xl font-semibold shadow-lg"
          >
            <span>Token: {item.token}</span>
            <span>Counter: {item.counter}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-lg">No tokens currently being served</p>
      )}
    </div>
  );
};

export default DisplayScreen;
