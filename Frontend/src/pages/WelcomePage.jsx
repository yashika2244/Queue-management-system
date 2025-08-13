import React, { useContext } from 'react';
// import { AuthContext, useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  // const { user } = useAuth()
  const navigate = useNavigate()
  // const username = user?.firstName || "there";
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-10 space-y-8">
        
        {/* QueuePilot Branding */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-teal-700 tracking-tight">
            <span className="text-gray-800">Welcome to</span> QueuePilot
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Your smart queue & visitor management assistant 🚀
          </p>
        </div>

        {/* Welcome Text */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Hello, y! 👋
          </h2>
          <p className="mt-2 text-gray-600 max-w-md mx-auto">
            Let’s begin optimizing your service experience with smarter queue handling and faster interactions.
          </p>
        </div>

        {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-gray-700 font-medium">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <span className="text-2xl">🤝</span>
            <p className="mt-2">Welcome Visitors</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <span className="text-2xl">💼</span>
            <p className="mt-2">Provide Service</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <span className="text-2xl">📈</span>
            <p className="mt-2">Track Analytics</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center"
          onClick={()=> navigate('/welcome')}
        
        >

          <button
            className="mt-6 px-8 py-3 bg-teal-700 hover:bg-teal-600 text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-md"
          >
            Let’s Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
