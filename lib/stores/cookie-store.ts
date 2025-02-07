import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookiePreferences {
  analytics?: boolean;
  marketing?: boolean;
}

interface CookieStore {
  consentGiven: boolean;
  preferences: CookiePreferences;
  setConsent: (value: boolean) => void;
  setPreferences: (prefs: Partial<CookiePreferences>) => void;
}

export const useCookieStore = create<CookieStore>()(
  persist(
    (set) => ({
      consentGiven: false,
      preferences: { analytics: true, marketing: true },
      setConsent: (value: boolean) => set({ consentGiven: value }),
      setPreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),
    }),
    {
      name: "cookie-preferences",
    }
  )
);
