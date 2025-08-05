
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  // Auto login on page refresh
  useEffect(() => {
    console.log("✅ useEffect triggered in AuthContext");

    const token = localStorage.getItem("token");
    console.log("Stored token:", token);
    if (token) {
      fetch(`${baseUrl}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.user) {
            setUser(data.user);
          } else {
            localStorage.removeItem("token");
            setUser(null);
            toast.error("Session expired. Please login again.");
          }
        })
        .catch(() => {
          setUser(null);
          localStorage.removeItem("token");
          toast.error("Failed to authenticate user.");
        });
    }
  }, []);

  // Login handler
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

      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setUser(data.user);
        toast.success("Login successful!");
        return true;
      } else {
        toast.error(data.message || "Login failed.");
        return false;
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong during login.");
      return false;
    }
  };

  // Signup handler
  // const signup = async (formData) => {
  //   try {
  //     const res = await fetch(`${baseUrl}/api/auth/signup`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       localStorage.setItem("signupUserId", data.user.id);
  //       toast.success("Signup successful! Please complete setup.");
  //       window.location.href = "/setup-trial";
  //       return true;
  //     } else {
  //       toast.error(data.message || "Signup failed.");
  //       return false;
  //     }
  //   } catch (err) {
  //     console.error("Signup error:", err);
  //     toast.error("Something went wrong during signup.");
  //     return false;
  //   }
  // };
const signup = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ Token and User store karo
      localStorage.setItem("token", data.token);
      localStorage.setItem("signupUserId", data.user.id);
      setUser(data.user); // ✅ AuthContext ke state me user set karo

      toast.success("Signup successful! Please complete setup.");
      window.location.href = "/setup-trial";
      return true;
    } else {
      toast.error(data.message || "Signup failed.");
      return false;
    }
  } catch (err) {
    console.error("Signup error:", err);
    toast.error("Something went wrong during signup.");
    return false;
  }
};

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
