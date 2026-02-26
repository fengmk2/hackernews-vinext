import { defineConfig, type Plugin } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

// Vite 7.1.11+ generates `createRequire(import.meta.url)` for CJS require()
// calls, but import.meta.url is undefined in the Cloudflare workerd runtime.
// This plugin replaces it with a dummy file URL so createRequire works.
function fixCreateRequire(): Plugin {
  return {
    name: "fix-create-require",
    renderChunk(code) {
      if (code.includes("createRequire(import.meta.url)")) {
        return code.replaceAll(
          "createRequire(import.meta.url)",
          'createRequire("file:///worker.js")',
        );
      }
    },
  };
}

export default defineConfig({
  environments: {
    client: {
      optimizeDeps: {
        include: ["react/jsx-runtime", "react/jsx-dev-runtime"],
      },
    },
  },
  plugins: [
    fixCreateRequire(),
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
