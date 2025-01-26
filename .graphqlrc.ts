import { ApiType, shopifyApiProject } from "@shopify/api-codegen-preset";

const config = {
  schema: "https://shopify.dev/storefront-graphql-direct-proxy",
  documents: ["./lib/shopify/queries/**/*.ts", "./app/**/*.tsx", "./components/**/*.tsx"],
  projects: {
    default: shopifyApiProject({
      apiType: ApiType.Storefront,
      apiVersion: "2024-10",
      outputDir: "./types",
    }),
  },
};

export default config;
