// ==================== API Client ====================
// Centralized API client untuk komunikasi dengan backend Express

import type { Category, Pembicara, Event, LoginResponse, ApiResponse } from "../types";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Helper untuk fetch dengan error handling dan TypeScript generics
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem("token");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options?.headers,
  };

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Terjadi kesalahan" }));
    throw new Error(error.message || `HTTP Error ${res.status}`);
  }

  return res.json();
}

// ==================== Auth API ====================
export const authApi = {
  login: (nim: string, password: string) =>
    request<LoginResponse>("/users/login", {
      method: "POST",
      body: JSON.stringify({ nim, password }),
    }),
};

// ==================== Category API ====================
export const categoryApi = {
  getAll: () => request<Category[]>("/categories"),
  getById: (id: number) => request<Category>(`/categories/${id}`),
  create: (data: { name: string }) =>
    request<ApiResponse<Category>>("/categories", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: number, data: { name: string }) =>
    request<ApiResponse<Category>>(`/categories/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ message: string }>(`/categories/${id}`, { method: "DELETE" }),
};

// ==================== Pembicara API ====================
export const pembicaraApi = {
  getAll: () => request<Pembicara[]>("/pembicaras"),
  getById: (id: number) => request<Pembicara>(`/pembicaras/${id}`),
  create: (data: Omit<Pembicara, "id" | "createdAt">) =>
    request<ApiResponse<Pembicara>>("/pembicaras", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: number, data: Partial<Omit<Pembicara, "id" | "createdAt">>) =>
    request<ApiResponse<Pembicara>>(`/pembicaras/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ message: string }>(`/pembicaras/${id}`, { method: "DELETE" }),
};

// ==================== Event API ====================
export const eventApi = {
  getAll: () => request<Event[]>("/events"),
  getById: (id: number) => request<Event>(`/events/${id}`),
  create: (data: Omit<Event, "id" | "createdAt" | "category" | "pembicara">) =>
    request<ApiResponse<Event>>("/events", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: number, data: Partial<Omit<Event, "id" | "createdAt" | "category" | "pembicara">>) =>
    request<ApiResponse<Event>>(`/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<{ message: string }>(`/events/${id}`, { method: "DELETE" }),
};
