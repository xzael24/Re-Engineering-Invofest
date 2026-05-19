// ==================== Auth Store (Zustand) ====================
// Global state management untuk autentikasi menggunakan Zustand
// Login menggunakan NIM dan Password sesuai ketentuan UAS

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types";
import { authApi } from "../lib/api";

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (nim: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (nim: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authApi.login(nim, password);
          // Simpan token ke localStorage untuk API client
          localStorage.setItem("token", response.token);
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return true;
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || "Login gagal",
          });
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage", // key di localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
