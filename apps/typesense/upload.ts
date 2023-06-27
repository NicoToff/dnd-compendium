import fs from "fs/promises";
import { join } from "path";
import { typesense } from "../../libs/typesense/client.js";

export default async function upload() {
  const spells = await fs
    .readFile(join(process.cwd(), "apps", "typesense", "api", "5e-SRD-Spells.json"))
    .then(file => JSON.parse(file.toString()))
    .catch(console.error);
  typesense.collections("5e-srd-spells").documents().import(spells, { action: "upsert" });
}

upload();
