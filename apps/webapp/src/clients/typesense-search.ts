import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const typesenseInstantSearchClient = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_SEARCH_API_KEY as string,
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_NODE_HOST as string,
        port: 443,
        protocol: "https",
      },
    ],
    cacheSearchResultsForSeconds: 60 * 2,
  },
  additionalSearchParameters: {
    query_by: "name,desc",
    query_by_weights: "8,6",
  },
}).searchClient;
console.log(
  "🚀 ~ file: typesense-search.ts:21 ~ typesenseInstantSearchClient:",
  typesenseInstantSearchClient
);
