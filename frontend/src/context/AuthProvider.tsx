"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import api from "@/services/backend-api/authApi";

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const acceptUrl = ["/auth/login", "/auth/register"];

  useEffect(() => {
    const verifyAuth = async () => {
      if (acceptUrl.includes(pathname)) {
        setLoading(false);
        return; // Не проверяем токен на страницах входа и регистрации
      }
      
      try {
        await api.checkToken();
        setIsAuthenticated(true);
      } catch (error) {
        router.push("/auth/login/");
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
