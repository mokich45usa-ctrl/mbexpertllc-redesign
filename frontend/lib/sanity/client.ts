import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "on4kffi1";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: true,
    })
  : null;

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  if (!sanityClient) {
    return null;
  }
  return sanityClient.fetch<T>(query, params);
}
