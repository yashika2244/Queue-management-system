import React, { useState } from "react";
import { Plus, List, Search, X } from "lucide-react";

const QminderPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top Location Bar */}
      <div className="bg-purple-100 text-purple-800 text-sm px-6 py-3 flex justify-between items-center border-b border-purple-300">
        <span className="font-medium">
          DEMO LOCATION – Seeing sample data. When you’re ready, create your own location.
        </span>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>
          <button className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-purple-700 cursor-pointer">
            <Plus size={16} /> New Location
          </button>
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 cursor-pointer">
            <List size={16} /> All Locations
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="w-64 border-r border-gray-200 p-4 flex flex-col">
          {/* Desk & Services */}
          <div className="flex items-center gap-2 mb-5">
            <button className="border px-3 py-1 rounded text-sm hover:bg-gray-50 transition">
              Desk
            </button>
            <button className="border px-3 py-1 rounded text-sm flex items-center hover:bg-gray-50 transition">
              Services{" "}
              <span className="ml-2 bg-gray-200 px-2 rounded-full text-xs font-medium">
                3
              </span>
            </button>
          </div>

          {/* Status Sections */}
          <div className="space-y-4 flex-1 overflow-y-auto custom-scroll">
            <div className="flex justify-between items-center font-semibold">
              <span>Serving now</span>
              <span className="bg-gray-200 text-xs rounded-full px-2">1</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Waiting</span>
              <span className="bg-orange-200 text-xs rounded-full px-2">2</span>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <span>Completed</span>
              <span className="bg-gray-300 text-xs rounded-full px-2">0</span>
            </div>
          </div>

          {/* Add Visitor Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-800 text-white py-2 rounded mt-4 hover:bg-teal-700 transition font-medium"
          >
            + Add visitor
          </button>
        </div>

        {/* Middle Panel */}
        <div className="flex-1 border-r border-gray-200 overflow-y-auto custom-scroll">
          <div className="p-5">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="font-semibold text-lg">Matthew Wilson</h2>
                <p className="text-sm text-gray-600">Consultation</p>
              </div>
              <span className="bg-gray-200 text-xs px-2 py-1 rounded font-medium">
                Serving now • 24h 42m
              </span>
            </div>

            {/* Contact Info */}
            <div className="mb-4 text-sm text-gray-700">
              <p>Email: matthew.wilson@example.com</p>
              <p>Phone: (202) 555-0145</p>
            </div>

            {/* Editable Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="First name"
                className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue="Matthew"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue="Wilson"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue="matthew.wilson@example.com"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
                defaultValue="(202) 555-0145"
              />
            </form>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="bg-teal-100 px-3 py-2 rounded hover:bg-teal-200 transition text-sm">
                Finish serving
              </button>
              <button className="bg-teal-100 px-3 py-2 rounded hover:bg-teal-200 transition text-sm">
                Call next
              </button>
              <button className="border px-3 py-2 rounded hover:bg-gray-50 transition text-sm">
                ...
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Activity */}
        <div className="w-80 overflow-y-auto p-5 custom-scroll">
          <h3 className="font-semibold mb-4">Activity</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-500">10:46 AM</p>
              <p className="bg-gray-100 p-2 rounded">
                Hi Matthew! You are now in the queue...
              </p>
            </div>
            <div>
              <p className="text-gray-500">10:47 AM</p>
              <p className="bg-gray-100 p-2 rounded">It is now your turn!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative border border-gray-100">
    
    {/* Close Button */}
    <button
      onClick={() => setIsModalOpen(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
    >
      <X size={22} />
    </button>

    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Visitor</h2>

    <form className="space-y-5">

      {/* First & Last Name */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First name *"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm shadow-sm"
        />
        <input
          type="text"
          placeholder="Last name"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm shadow-sm"
        />
      </div>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm shadow-sm"
      />

      {/* Phone */}
      <input
        type="text"
        placeholder="Phone number"
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm shadow-sm"
      />

      {/* Service Type */}
      <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm bg-white shadow-sm">
        <option>Information</option>
        <option>Consultation</option>
        <option>Support</option>
      </select>

      {/* DOB */}
      <input
        type="text"
        placeholder="Date of Birth (DD/MM/YYYY)"
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm shadow-sm"
      />

      {/* Plan */}
      <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-500 outline-none text-sm bg-white shadow-sm">
        <option>Basic Plan</option>
        <option>Premium Plan</option>
      </select>

      {/* Actions */}
      <div className="flex justify-end gap-4 pt-5 border-t border-gray-100">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-teal-600 text-white font-medium rounded-lg text-sm shadow-md hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 transition-all"
        >
          Add Visitor
        </button>
      </div>

    </form>
  </div>
</div>



      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
      `}</style>
    </div>
  );
};

export default QminderPage;
