import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

function myPlugin() {
  const virtualModuleId = "virtual:my-module";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "my-plugin", // 必须的，将会在 warning 和 error 中显示
    resolveId(id) {
      console.log("resolveId", id);
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      console.log("loadId", id);
      if (id === resolvedVirtualModuleId) {
        return `export const msg = "from virtual module"`;
      }
    },
  };
}

export default defineConfig({
  root: "./",
  plugins: [
    myPlugin(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "xiaohao-cli",
          content: "我是一些内容",
        },
      },
    }),
  ],
  server: {
    port: 9001,
  },
});
