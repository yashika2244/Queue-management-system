// src/api/appointmentApi.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    console.log("🟢 Token attached:", token);
  }else {
    console.log("🔴 No token found in localStorage");
  }
  return req;
});




// ✅ Book appointment (public)
export const bookAppointment = async (appointmentData) => {
  const res = await API.post("/api/appointments/book", appointmentData);
  return res.data;
};

// ✅ Get all appointments (admin only)
export const getAppointments = async () => {
  try {
    const res = await API.get("/api/appointments");
    return res.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};


// ✅ Cancel appointment (POST method, not DELETE)
export const cancelAppointment = async (appointmentId) => {
  const res = await API.post(`/api/appointments/cancel/${appointmentId}`);
  return res.data;
};
