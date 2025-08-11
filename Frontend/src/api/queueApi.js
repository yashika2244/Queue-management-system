// src/api/queueApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Create a queue (admin/staff)
export const createQueue = async (queueData) => {
  const res = await API.post("/api//queue/create", queueData);
  return res.data;
};

// Get live queue for a branch
export const getLiveQueue = async (branchId) => {
  const res = await API.get(`/api//queue/live/${branchId}`);
  return res.data;
};

// Check-in customer to queue
export const checkInCustomer = async (checkInData) => {
  const res = await API.post("/api//queue/checkin", checkInData);
  return res.data;
};

// Call next customer
export const callNext = async (branchId) => {
  const res = await API.post(`/api//queue/next/${branchId}`);
  return res.data;
};

// Serve customer
export const serveCustomer = async (customerId) => {
  const res = await API.post(`/api//queue/serve/${customerId}`);
  return res.data;
};

// Cancel queue
export const cancelQueue = async (customerId) => {
  const res = await API.post(`/api//queue/cancel/${customerId}`);
  return res.data;
};


export const getDisplayData = async (branchId) => {
  const res = await API.get(`/api//display/${branchId}`);
  return res.data;
};