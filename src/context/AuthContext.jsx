"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "sonner";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const saveUser = (data) => {
    setUser(data);
    localStorage.setItem("auth_user", JSON.stringify(data));
  };

  const signup = async ({ name, email, password, password_confirmation, terms_and_conditions }) => {
    const res = await axiosInstance.post("/user-signup", {
      name,
      email,
      password,
      password_confirmation,
      terms_and_conditions,
    });
    if (res.data?.status) {
      saveUser(res.data.data);
    }
    return res.data;
  };

  const login = async ({ email, password }) => {
    const res = await axiosInstance.post("/user-login", { email, password });
    if (res.data?.status) {
      saveUser(res.data.data);
    }
    return res.data;
  };

  const logout = async () => {
    try {
      await axiosInstance.post("/user-logout");
    } catch (err) {
      console.warn("Logout failed", err);
    }
    localStorage.removeItem("auth_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
