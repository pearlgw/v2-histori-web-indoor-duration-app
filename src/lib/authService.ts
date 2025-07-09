import api from "./axios";
import { signOut } from "next-auth/react";

export type LoginResponse = {
  token: string;
  role: "admin" | "user";
  name: string;
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post("api/3/auth/login", { email, password });
  return response.data;
};

export const logoutUser = async (token: string) => {
  
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  try {
    await api.post("api/3/auth/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await signOut({ callbackUrl: apiUrl });
  } catch (error) {
    console.error("Logout error:", error);
  }
};
