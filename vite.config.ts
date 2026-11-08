import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import packageJson from "./package.json" with { type: "json" };
import tailwindcss from "@tailwindcss/vite";

const { peerDependencies } = packageJson;
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["**/*.stories.ts", "**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
  build: {
    emptyOutDir: !process.argv.includes("--watch"),
    lib: {
      entry: "./src/index.ts",
      name: "HiggyUI",
      fileName: (format) => (format === "cjs" ? "ui.cjs" : "ui.es.js"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: (id) => [...Object.keys(peerDependencies), "lucide-react"].some(
        (dependency) => id === dependency || id.startsWith(`${dependency}/`),
      ),
      output: { banner: '"use client";' },
    },
  },
});
