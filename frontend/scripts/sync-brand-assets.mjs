import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const source = resolve(root, "docs/stagium-logo.png");
const destination = resolve(root, "frontend/public/brand/stagium-logo.png");

mkdirSync(dirname(destination), { recursive: true });

if (existsSync(source)) {
  copyFileSync(source, destination);
  console.log(`Synced brand asset: ${source} -> ${destination}`);
} else {
  console.warn(`Brand asset not found at ${source}. The UI will use the built-in accessible fallback mark.`);
}
