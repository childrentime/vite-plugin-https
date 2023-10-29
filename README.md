# VITE_PLUGIN_HTTPS

Utilizes [devcert](https://github.com/childrentime/devcert) to provide HTTPS service.

## Usage

```tsx
import pluginHttps from "vite-plugins-https";

export default defineConfig({
  plugins: [httpsPlugin()],
});
```

## Vite Middleware Mode

When you use the middleware mode in Vite, this plugin will not take effect because you need to manually pass the HTTPS options to your custom server.

```ts
import { certificateFor } from '@childrentime/devcert'

const app = express();
const viteServer = await createViteServer({
  // ...options,
  server: { middlewareMode: true },
  appType: "custom",
});
app.use(viteServer.middlewares);

// instead of
const server = app.listen(port, () => {});

// use
const localHttpsOptions = await certificateFor(["localhost"]);
const server = https.createServer(localHttpsOptions, app);
server.listen(port, () => {});
```
