import api from "./axios";

export type LoginResponse = {
  token: string;
  role: 'admin' | 'user';
  name: string;
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post("/login", { email, password });
  return response.data;
};
