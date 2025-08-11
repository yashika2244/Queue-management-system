// src/api/feedbackApi.js
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

// Submit feedback
export const submitFeedback = async (feedbackData) => {
  const res = await API.post("/api/feedback", feedbackData);
  return res.data;
};

// Get all feedbacks
export const getAllFeedback = async () => {
  const res = await API.get("/api/feedback");
  return res.data;
};