import { create } from "zustand";
import type { User } from "@/types";

export const useUserStore = create((set) => ({
  user: {
    id: 1,
    name: "John Doe",
  },
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));
