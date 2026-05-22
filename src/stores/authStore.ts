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


  login: (nim: string, password: string) => Promise<boolean>;
  register: (data: any) => Promise<boolean>;
  updatePhoto: (file: File) => Promise<boolean>;
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

      register: async (data: any) => {
        set({ isLoading: true, error: null });
        try {
          await authApi.register(data);

          set({ isLoading: false, error: null });
          return true;
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || "Registrasi gagal",
          });
          return false;
        }
      },

      updatePhoto: async (file: File) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authApi.updatePhoto(file);
          set({
            user: response.user,
            isLoading: false,
            error: null,
          });
          return true;
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message || "Gagal mengunggah foto profil",
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
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
