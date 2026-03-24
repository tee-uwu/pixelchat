import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  theme: localStorage.getItem("chat-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
  toggleTheme: () => {
    const current = get().theme;
    const newTheme = current === "night" ? "wireframe" : "night";
    localStorage.setItem("chat-theme", newTheme);
    set({ theme: newTheme });
  },
}));
