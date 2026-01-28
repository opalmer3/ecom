import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
    },
    browser: {
      enabled: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
  },
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      "@": require("path").resolve(process.cwd(), "./"),
    },
  },
});
