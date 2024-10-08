import { listen } from "@colyseus/tools";
import appConfig from "./app.config";

// Listen on port 2567 (or PORT environment variable)
const port = process.env.PORT || 2567;
listen(appConfig);

console.log(`Game server is listening on ws://localhost:${port}`);