import { onRequest } from "firebase-functions/v2/https";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  conf: { distDir: ".next" }
});
const handle = app.getRequestHandler();
// ...existing code...
const prepared = app.prepare();

export const nextApp = onRequest({ region: "us-central1", memory: "1GiB"  }, async (req, res) => {
  await prepared;
  return handle(req, res);
});
// ...existing code...;
