import { create } from "zustand";
import type { User } from "../types";
import { userApi } from "../lib/api";

interface UserUpdateData {
  name?: string;
  bio?: string;
  event?: string;
  password?: string;
}

interface UserState {
  users: User[];
  isLoading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  updateUser: (id: number, data: UserUpdateData) => Promise<boolean>;
  deleteUser: (id: number) => Promise<boolean>;
  clearError: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const users = await userApi.getAll();
      set({ users, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  updateUser: async (id: number, data: UserUpdateData) => {
    set({ isLoading: true, error: null });
    try {
      await userApi.update(id, data);
      const users = await userApi.getAll();
      set({ users, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  deleteUser: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await userApi.delete(id);
      const users = await userApi.getAll();
      set({ users, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
