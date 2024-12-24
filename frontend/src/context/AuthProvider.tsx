"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import api from "@/services/backend-api/authApi";
import { User } from "./AuthProvider.types"
import { acceptUrls, loginUrl } from "@/services/constants/urls";

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    (async () => {
      setLoading(true)
      if (acceptUrls.includes(pathname)) {
        setLoading(false);
        return;
      }
      
      try {
        const userData = await api.getUser();
        setUser(userData)
        setIsAuthenticated(true);
      } catch (error) {
        try {
          await api.refreshToken()

          const userData = await api.getUser();
          setUser(userData)
          setIsAuthenticated(true);
        } catch {
          router.push(loginUrl);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, user }}>
      {children}
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
