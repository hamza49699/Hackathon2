import { createClient } from "next-sanity";

const client = createClient({
  projectId: "v8dcp6i7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-10-10",
});

// Define a more specific type for params if possible
export async function sanityFetch({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, unknown>; // Use `unknown` instead of `any`
}) {
  return await client.fetch(query, params);
}
