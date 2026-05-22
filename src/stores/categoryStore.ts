import { create } from "zustand";
import type { Category, CategoryFormData } from "../types";
import { categoryApi } from "../lib/api";

interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;


  fetchCategories: () => Promise<void>;
  createCategory: (data: CategoryFormData) => Promise<boolean>;
  updateCategory: (id: number, data: CategoryFormData) => Promise<boolean>;
  deleteCategory: (id: number) => Promise<boolean>;
  clearError: () => void;
}

export const useCategoryStore = create<CategoryState>()((set) => ({
  categories: [],
  isLoading: false,
  error: null,

  fetchCategories: async () => {
    set({ isLoading: true, error: null });
    try {
      const categories = await categoryApi.getAll();
      set({ categories, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  createCategory: async (data: CategoryFormData) => {
    set({ isLoading: true, error: null });
    try {
      await categoryApi.create(data);

      const categories = await categoryApi.getAll();
      set({ categories, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  updateCategory: async (id: number, data: CategoryFormData) => {
    set({ isLoading: true, error: null });
    try {
      await categoryApi.update(id, data);
      const categories = await categoryApi.getAll();
      set({ categories, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  deleteCategory: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await categoryApi.delete(id);
      const categories = await categoryApi.getAll();
      set({ categories, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
