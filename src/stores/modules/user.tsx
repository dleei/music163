import { create } from "zustand";
import type { UserState } from '@/types';

export const useUserStore = create<UserState>((set) => ({
  email: "",
  password: "",

  setEmail: (email: string | number) => set(() => ({ email })),
  setPassword: (password: string | number) => set(() => ({ password })),
  
}));
