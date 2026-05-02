import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

const singletonTypes = new Set(["siteSettings", "homePage"]);

export default defineConfig({
  name: "mbexpertllc",
  title: "MB Expert LLC Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "on4kffi1",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Settings")
              ),
            S.listItem()
              .title("Home Page")
              .child(S.document().schemaType("homePage").documentId("homePage").title("Home Page")),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? "")),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
