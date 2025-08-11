
// src/api/analyticsApi.js
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

// Get overall analytics
export const getOverallAnalytics = async () => {
  const res = await API.get("/api/analytics");
  return res.data;
};

// Get queue analytics
export const getQueueAnalytics = async () => {
  const res = await API.get("/api/analytics/queue");
  return res.data;
};

// Get staff analytics
export const getStaffAnalytics = async () => {
  const res = await API.get("/api/analytics/staff");
  return res.data;
};
