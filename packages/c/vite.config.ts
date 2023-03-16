import { defineConfig } from "vite";
import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyComponentLib",
      fileName: (format) => `my-component-lib.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "vueDemi"
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
});
