
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

// Branch APIs
export const createBranch = async (branchData) => {
  const res = await API.post("/api/setupBranches/branch", branchData);
  return res.data;
};

export const getAllBranches  = async () => {
  const res = await API.get("/api/setupBranches/branches");
  return res.data;
};

// Service APIs
export const addService = async (serviceData) => {
  const res = await API.post("/api/setupBranches/service", serviceData);
  return res.data;
};

export const getServicesByBranch = async (branchId) => {
  const res = await API.get(`/api/setupBranches/services/${branchId}`);
  return res.data;
};
