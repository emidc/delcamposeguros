import { readFile, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const workerPath = resolve(projectRoot, "dist/server/index.js");

const assets = [
  ["__BRAND_ISOTIPO_DATA__", "assets/brand-isotipo.png"],
  ["__BRAND_HORIZONTAL_DATA__", "assets/brand-horizontal.png"],
  ["__BRAND_HERO_DATA__", "assets/brand-hero.png"],
  ["__SECTOR_BODEGAS_DATA__", "assets/sector-bodegas.jpg"],
  ["__SECTOR_INDUSTRIA_DATA__", "assets/sector-industria.jpg"],
  ["__SECTOR_CONSTRUCCION_DATA__", "assets/sector-construccion.jpg"],
  ["__SECTOR_ENERGIA_MINERIA_DATA__", "assets/sector-energia-mineria.jpg"],
  ["__SECTOR_TRANSPORTE_DATA__", "assets/sector-transporte.jpg"],
  ["__WHATSAPP_ICON_DATA__", "assets/whatsapp.svg"],
  ["__COVERAGE_PROPERTY_DATA__", "assets/coverage-property.jpg"],
  ["__COVERAGE_LIABILITY_DATA__", "assets/coverage-liability.jpg"],
  ["__COVERAGE_TRANSPORT_DATA__", "assets/coverage-transport.jpg"],
  ["__COVERAGE_CONTRACTS_DATA__", "assets/coverage-contracts.jpg"],
  ["__COVERAGE_TEAM_DATA__", "assets/coverage-team.jpg"],
  ["__COVERAGE_SPECIAL_DATA__", "assets/coverage-special.jpg"],
  ["__COVERAGE_HOME_DATA__", "assets/coverage-home.jpg"],
  ["__COVERAGE_AUTO_DATA__", "assets/coverage-auto.jpg"],
  ["__COVERAGE_LIFE_DATA__", "assets/coverage-life.jpg"],
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
