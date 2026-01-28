"server only";

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const shopDomain = process.env.NEXT_PUBLIC_SHOP_DOMAIN;
if (!shopDomain) {
  throw new Error("NEXT_PUBLIC_SHOP_DOMAIN environment variable is required");
}

export const serverClient = createStorefrontApiClient({
  storeDomain: `https://${shopDomain}/`,
  apiVersion: "2025-01",
  privateAccessToken: process.env.STOREFRONT_PRIVATE_API_KEY,
  customFetchApi: fetch,
  retries: 3,
});
