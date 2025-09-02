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

export const proxyApi = onRequest({ region: "us-central1" }, async (req, res) => {
  try {
    // Get the target API from query params or body
    const targetUrl = req.query.url || req.body.url;

    if (!targetUrl) {
      res.status(400).json({ error: "Missing target API URL" });
      return;
    }

    // Fetch from the external API
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: Object.fromEntries(
        Object.entries(req.headers).map(([k, v]) => [k, Array.isArray(v) ? v.join(",") : v ?? ""])
      ),
      body: req.method !== "GET" ? req.body : undefined,
    });

    const data = await response.json();

    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "API request failed" });
  }
});