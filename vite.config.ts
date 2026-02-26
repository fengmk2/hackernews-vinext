import { defineConfig } from "vite-plus";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  environments: {
    client: {
      optimizeDeps: {
        include: ["react/jsx-runtime", "react/jsx-dev-runtime"],
      },
    },
  },
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
