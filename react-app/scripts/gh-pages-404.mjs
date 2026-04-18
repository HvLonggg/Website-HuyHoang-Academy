/**
 * GitHub Pages không fallback SPA: copy index.html -> 404.html để F5 / đường dẫn sâu vẫn load app.
 */
import { copyFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const indexHtml = join(dist, "index.html");
const notFound = join(dist, "404.html");

if (existsSync(indexHtml)) {
  copyFileSync(indexHtml, notFound);
  console.log("gh-pages: wrote dist/404.html (copy of index.html)");
} else {
  console.warn("gh-pages: dist/index.html missing, skip 404.html");
  process.exitCode = 1;
}
