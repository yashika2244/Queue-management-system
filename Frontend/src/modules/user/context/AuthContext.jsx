import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // Auto login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${baseUrl}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.user) {
            setUser(data.user);
            toast.success("Auto login successful");
          } else {
            localStorage.removeItem("token");
            setUser(null);
            toast.error("Session expired. Please login again.");
          }
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem("token");
          toast.error("Failed to authenticate user");
        });
    }
  }, []);

const login = async (formData) => {
  try {
    const payload = {
      password: formData.password,
    };

    if (/^\d{10}$/.test(formData.identifier)) {
      payload.mobile = formData.identifier;
    } else {
      payload.email = formData.identifier;
    }

    const res = await fetch(`${baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("User object from login:", data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);
      setUser(data.user);
      toast.success("Login successful");
      return true; // ✅ RETURN success
    } else {
      toast.error(data.message || "Login failed");
      return false; // ❌ RETURN failure
    }
  } catch (err) {
    console.error("Login error:", err);
    toast.error("Something went wrong during login");
    return false; // ❌ RETURN failure
  }
};
  const signup = async (formData) => {
    try {
      const res = await fetch(`${baseUrl}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Signup successful! Please login.");
        return true;
      } else {
        toast.error(data.message || "Signup failed");
        return false;
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong during signup");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
