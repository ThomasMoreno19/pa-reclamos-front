"use client";

import { create } from "zustand";
import type { AuthData } from "@/features/auth/types/auth";

interface AuthState {
  auth: AuthData | null;
  setAuth: (auth: AuthData | null) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
  clearAuth: () => set({ auth: null }),
}));


