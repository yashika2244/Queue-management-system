// src/components/queue/QueueCard.jsx
import React from "react";

const QueueCard = ({ customer, onCallNext, onServe, onCancel }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md flex flex-col gap-2">
      <div className="font-semibold text-lg">{customer.customerName}</div>
      <div className="text-sm text-gray-500">Token: {customer.tokenNumber}</div>
      <div className="text-sm text-gray-500">Status: {customer.status}</div>
      <div className="text-sm text-gray-500">Branch: {customer.branchName}</div>
      <div className="text-sm text-gray-500">Service: {customer.serviceName}</div>

      <div className="flex gap-2 mt-3">
        {customer.status === "waiting" && (
          <button
            onClick={() => onCallNext(customer._id)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
          >
            Call Next
          </button>
        )}
        {customer.status === "called" && (
          <button
            onClick={() => onServe(customer._id)}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
          >
            Serve
          </button>
        )}
        {customer.status !== "served" && (
          <button
            onClick={() => onCancel(customer._id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default QueueCard;
