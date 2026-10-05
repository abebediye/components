/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Builds the distributable package consumed by other repositories.
// Type declarations are generated separately via `tsc -p tsconfig.lib.json`.
// See https://vite.dev/guide/build.html#library-mode
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.join(import.meta.dirname, "src"),
        },
    },
    build: {
        outDir: "dist",
        // Vite runs one pass per format within a single invocation; disable
        // auto-clean so the second pass doesn't wipe the first pass's output
        // (including the generated .d.ts file).
        emptyOutDir: false,
        lib: {
            entry: "src/index.ts",
            name: "Components",
            fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                assetFileNames: "style.css",
            },
        },
    },
    publicDir: false,
});
