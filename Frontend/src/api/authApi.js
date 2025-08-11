// src/api/authApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", 
});

// Add token to headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// LOGIN
export const loginStaff = async (credentials) => {
  const res = await API.post("/api/staff/login", credentials);
  return res.data;
};

// START FREE TRIEAL
export const startFreeTrial = async (data) => {
  const res = await API.post("/api/staff/start-trial", data);
  return res.data;
};

// REGISTER
export const registerStaff = async (staffData) => {
  const res = await API.post("/api/staff/register", staffData);
  return res.data;
};

// GET CURRENT STAFF PROFILE
export const getMyProfile = async () => {
  const res = await API.get("/api/staff/profile");
  return res.data;
};
