import { readFile, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workerPath = resolve(projectRoot, "dist/server/index.js");

const assets = [
  ["__DEL_CAMPO_LOGO_DATA__", "assets/del-campo-logo.png"],
  ["__DEL_CAMPO_FAVICON_DATA__", "assets/del-campo-favicon.png"],
  ["__DEL_CAMPO_OG_DATA__", "assets/del-campo-og.png"],
];

let source = await readFile(workerPath, "utf8");
for (const [placeholder, relativePath] of assets) {
  const assetPath = resolve(projectRoot, relativePath);
  const mime = extname(assetPath) === ".png" ? "image/png" : "application/octet-stream";
  const encoded = (await readFile(assetPath)).toString("base64");
  source = source.replaceAll(placeholder, `data:${mime};base64,${encoded}`);
}

await writeFile(workerPath, source);
