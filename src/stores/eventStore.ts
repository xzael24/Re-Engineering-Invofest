// ==================== Event Store (Zustand) ====================
// Global state management untuk CRUD Event menggunakan Zustand

import { create } from "zustand";
import type { Event, EventFormData } from "../types";
import { eventApi } from "../lib/api";

interface EventState {
  events: Event[];
  isLoading: boolean;
  error: string | null;

  // Actions
  fetchEvents: () => Promise<void>;
  createEvent: (data: EventFormData) => Promise<boolean>;
  updateEvent: (id: number, data: EventFormData) => Promise<boolean>;
  deleteEvent: (id: number) => Promise<boolean>;
  clearError: () => void;
}

export const useEventStore = create<EventState>()((set) => ({
  events: [],
  isLoading: false,
  error: null,

  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    try {
      const events = await eventApi.getAll();
      set({ events, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  createEvent: async (data: EventFormData) => {
    set({ isLoading: true, error: null });
    try {
      await eventApi.create(data);
      const events = await eventApi.getAll();
      set({ events, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  updateEvent: async (id: number, data: EventFormData) => {
    set({ isLoading: true, error: null });
    try {
      await eventApi.update(id, data);
      const events = await eventApi.getAll();
      set({ events, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  deleteEvent: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await eventApi.delete(id);
      const events = await eventApi.getAll();
      set({ events, isLoading: false });
      return true;
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
