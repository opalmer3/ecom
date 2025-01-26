"server only";

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const serverClient = createStorefrontApiClient({
  storeDomain: "https://ihra2e-zq.myshopify.com/",
  apiVersion: "2024-10",
  privateAccessToken: process.env.STOREFRONT_PRIVATE_API_KEY,
  customFetchApi: fetch,
  retries: 3,
});
