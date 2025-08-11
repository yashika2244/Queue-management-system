// src/api/staffApi.js
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

// Get all staff
export const getAllStaff = async () => {
  const res = await API.get("/api/staff");
  return res.data;
};

// Delete a staff member
export const deleteStaff = async (staffId) => {
  const res = await API.delete(`/api/staff/${staffId}`);
  return res.data;
};
