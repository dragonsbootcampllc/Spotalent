import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types";

interface UserState {
    user: User | null;                              // Current logged-in user (or null if not authenticated)
    setUser: (user: User) => void;                  // Function to set user data
    updateUser: (updates: Partial<User>) => void;   // Function to update user data partially
    clearUser: () => void;                          // Function to clear user data (e.g., on logout)
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null, // Initial state: no user is logged in

            setUser: (user) => set({ user }),

            updateUser: (updates) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...updates } : state.user,
                })),

            clearUser: () => set({ user: null }),
        }),
        {
            name: "user-storage", // name of the item in the storage (must be unique)
        }
    )
);
