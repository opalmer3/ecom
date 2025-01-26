"use client";

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const browserClient = createStorefrontApiClient({
  storeDomain: "https://ihra2e-zq.myshopify.com/",
  apiVersion: "2024-10",
  publicAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_API_KEY as string,
  retries: 3,
});
