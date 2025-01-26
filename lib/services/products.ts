"server only";

import { serverClient } from "@/lib/shopify/client/server";
import {
  PRODUCTS_QUERY,
  PRODUCT_BY_HANDLE_QUERY,
} from "@/lib/shopify/queries/products";
import { ProductSortKeys } from "@/types/storefront";
import { unstable_cache } from "next/cache";

export const getProducts = unstable_cache(
  async (first = 250, sortKey = ProductSortKeys.BestSelling) => {
    const { data, errors } = await serverClient.request(PRODUCTS_QUERY, {
      variables: {
        first,
        sortKey,
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

    return data?.products?.edges || [];
  },
  ["products"],
  {
    revalidate: 3600,
    tags: ["products"],
  }
);

export const getProductByHandle = unstable_cache(
  async (handle: string) => {
    const { data, errors } = await serverClient.request(
      PRODUCT_BY_HANDLE_QUERY,
      {
        variables: {
          handle,
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
  ["product-by-handle"],
  {
    revalidate: 3600,
    tags: ["products"],
  }
);
