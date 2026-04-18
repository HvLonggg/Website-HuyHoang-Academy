import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const userDir = path.join(repoRoot, "user");
const schoolDir = path.join(userDir, "school");
const outDir = path.join(__dirname, "..", "src", "legacy", "generated");

function extractContent(html) {
  const bodyMatch = html.match(/<body[^>]*>/i);
  if (!bodyMatch) return "";
  let start = bodyMatch.index + bodyMatch[0].length;
  const endBody = html.search(/<\/body>/i);

  const hc = html.indexOf("</header>");
  if (hc !== -1 && hc < endBody) {
    start = hc + "</header>".length;
  } else {
    const nc = html.indexOf("</nav>");
    if (nc !== -1 && nc < endBody) {
      start = nc + "</nav>".length;
    }
  }

  let end = html.search(/<footer[\s>]/i);
  if (end === -1 || end > endBody) {
    const floatPat = /<!--\s*Floating|<div class="floating-buttons"|<div class='floating-buttons'/i;
    const m = html.search(floatPat);
    end = m !== -1 && m < endBody ? m : endBody;
  }
  if (end === -1) end = endBody;
  return html.slice(start, end).trim();
}

function extractAllStyles(html) {
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const parts = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    parts.push(m[1].trim());
  }
  return parts.join("\n\n");
}

function stripScripts(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

const files = [
  ...fs.readdirSync(userDir).filter((f) => f.endsWith(".html")).map((f) => path.join(userDir, f)),
  ...fs.readdirSync(schoolDir).filter((f) => f.endsWith(".html")).map((f) => path.join(schoolDir, f)),
];

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (const filePath of files) {
  const base = path.basename(filePath, ".html");
  const key = base.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "") || "page";
  const html = fs.readFileSync(filePath, "utf8");
  let content = stripScripts(extractContent(html));
  const style = extractAllStyles(html);

  const safeName = base.replace(/\s+/g, "_").replace(/\+/g, "plus");
  fs.writeFileSync(path.join(outDir, `${safeName}.body.html`), content, "utf8");
  fs.writeFileSync(path.join(outDir, `${safeName}.css`), style, "utf8");
  console.log("OK", base, "content", content.length, "css", style.length);
}

console.log("Done ->", outDir);
