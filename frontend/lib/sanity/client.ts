import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "on4kffi1";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = projectId
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

const imageBuilder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function sanityImageUrl(source: unknown) {
  if (!imageBuilder || !source) {
    return "";
  }

  return imageBuilder.image(source).url();
}
