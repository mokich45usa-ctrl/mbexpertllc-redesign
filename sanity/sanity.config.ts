import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "mbexpertllc",
  title: "MB Expert LLC Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "on4kffi1",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  schema: {
    types: schemaTypes,
  },
});
