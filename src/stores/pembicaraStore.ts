


import { create } from "zustand";
import type { Pembicara, PembicaraFormData } from "../types";
import { pembicaraApi } from "../lib/api";

interface PembicaraState {
  pembicaras: Pembicara[];
  isLoading: boolean;
  error: string | null;


  fetchPembicaras: () => Promise<void>;
  createPembicara: (data: PembicaraFormData) => Promise<boolean>;
  updatePembicara: (id: number, data: PembicaraFormData) => Promise<boolean>;
  deletePembicara: (id: number) => Promise<boolean>;
  clearError: () => void;
}

export const usePembicaraStore = create<PembicaraState>()((set) => ({
  pembicaras: [],
  isLoading: false,
  error: null,

  fetchPembicaras: async () => {
    set({ isLoading: true, error: null });
    try {
      const pembicaras = await pembicaraApi.getAll();
      set({ pembicaras, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  createPembicara: async (data: PembicaraFormData) => {
    set({ isLoading: true, error: null });
    try {
      await pembicaraApi.create({ ...data, photo: data.photo || "", expertise: data.expertise || [] });
      const pembicaras = await pembicaraApi.getAll();
      set({ pembicaras, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  updatePembicara: async (id: number, data: PembicaraFormData) => {
    set({ isLoading: true, error: null });
    try {
      await pembicaraApi.update(id, data);
      const pembicaras = await pembicaraApi.getAll();
      set({ pembicaras, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  deletePembicara: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await pembicaraApi.delete(id);
      const pembicaras = await pembicaraApi.getAll();
      set({ pembicaras, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
