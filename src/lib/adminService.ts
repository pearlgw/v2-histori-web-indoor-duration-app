// lib/adminService.ts
import api from "@/lib/axios";
import { z } from "zod";
import { RegisterSchema } from "@/schemas";

// Fungsi createAssistant dengan axios dan FormData
export async function createAssistant(data: z.infer<typeof RegisterSchema>, token: string) {
  const file = data.image?.[0];

  if (!file) throw new Error("Gambar tidak ditemukan");

  const formData = new FormData();
  formData.append("nim", data.nim);
  formData.append("fullname", data.fullname);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("address", data.address);
  formData.append("image", file); // Kirim sebagai File (otomatis bytes)

  const response = await api.post("/api/3/admin/create-assistant", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function getAllUsers(token: string) {
  const response = await api.get("/api/3/admin/assistant", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data; // assuming the response has a `data` array
}

export async function getLogHistory(token: string) {
  const response = await api.get("/api/3/logs/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}