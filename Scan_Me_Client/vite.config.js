import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/, // Cấu hình này để bao gồm các tệp .jsx
  },
  css: {
    modules: {
      localsConvention: "camelCase", // Tuỳ chọn: Cấu hình kiểu đặt tên class
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Đơn vị: kB
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
