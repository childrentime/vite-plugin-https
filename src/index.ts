import type { Plugin } from "vite";
import { certificateFor } from "@childrentime/devcert";

export default async function pluginMD(): Promise<Plugin> {
  return {
    name: "plugin-https",
    async configResolved(config) {
      const httpsOptions = await certificateFor(["localhost"]);
      config.server.https = Object.assign({}, config.server.https, httpsOptions);
      config.preview.https = Object.assign({}, config.preview.https, httpsOptions);
    },
  };
}
