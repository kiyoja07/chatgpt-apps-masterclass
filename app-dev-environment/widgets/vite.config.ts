import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const FULL_URL = "https://server.kiyoja07.workers.dev/"; // server를 배포한 실제 URL

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === "production" ? FULL_URL : undefined,
    build: {
      outDir: "../server/dist",
      emptyOutDir: true,
    },
  };
});
