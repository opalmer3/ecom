"server only";

import { serverClient } from "@/lib/shopify/client/server";
import {
  COLLECTION_BY_HANDLE_QUERY,
  COLLECTIONS_QUERY,
} from "@/lib/shopify/queries/collections";
import { unstable_cache } from "next/cache";

export const getCollections = unstable_cache(
  async (first = 250) => {
    const { data, errors } = await serverClient.request(COLLECTIONS_QUERY, {
      variables: {
        first,
        productsFirst: 12,
      },
    });

    if (errors?.graphQLErrors?.length) {
      throw new Error(
        JSON.stringify({
          timestamp: new Date().toISOString(),
          errors: errors.graphQLErrors,
        })
      );
    }

    return (data?.collections?.edges || []).filter(
      (collection) => collection.node.products.edges.length > 0
    );
  },
  ["collections"],
  {
    revalidate: 3600,
    tags: ["collections"],
  }
);

export const getCollectionByHandle = unstable_cache(
  async (
    handle: string,
    {
      productsFirst = 12,
      productsAfter,
    }: { productsFirst?: number; productsAfter?: string } = {}
  ) => {
    const { data, errors } = await serverClient.request(
      COLLECTION_BY_HANDLE_QUERY,
      {
        variables: {
          handle,
          productsFirst,
          productsAfter,
        },
      }
    );

    if (errors?.graphQLErrors?.length) {
      throw new Error(
        JSON.stringify({
          timestamp: new Date().toISOString(),
          errors: errors.graphQLErrors,
        })
      );
    }

    return data;
  },
  ["collection-by-handle"],
  {
    revalidate: 3600,
    tags: ["collections"],
  }
);
