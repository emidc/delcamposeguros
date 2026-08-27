import { readFile, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workerPath = resolve(projectRoot, "dist/server/index.js");

const assets = [
  ["__DEL_CAMPO_LOGO_DATA__", "assets/del-campo-logo.png"],
  ["__DEL_CAMPO_FAVICON_DATA__", "assets/del-campo-favicon.png"],
  ["__DEL_CAMPO_OG_DATA__", "assets/del-campo-og.png"],
  ["__SECTOR_BODEGAS_DATA__", "assets/sector-bodegas.jpg"],
  ["__SECTOR_INDUSTRIA_DATA__", "assets/sector-industria.jpg"],
  ["__SECTOR_CONSTRUCCION_DATA__", "assets/sector-construccion.jpg"],
  ["__SECTOR_ENERGIA_MINERIA_DATA__", "assets/sector-energia-mineria.jpg"],
  ["__SECTOR_TRANSPORTE_DATA__", "assets/sector-transporte.jpg"],
  ["__WHATSAPP_ICON_DATA__", "assets/whatsapp.svg"],
];

let source = await readFile(workerPath, "utf8");
for (const [placeholder, relativePath] of assets) {
  const assetPath = resolve(projectRoot, relativePath);
  const extension = extname(assetPath);
  const mime = extension === ".png" ? "image/png" : extension === ".jpg" ? "image/jpeg" : extension === ".svg" ? "image/svg+xml" : "application/octet-stream";
  const encoded = (await readFile(assetPath)).toString("base64");
  source = source.replaceAll(placeholder, `data:${mime};base64,${encoded}`);
}

await writeFile(workerPath, source);
